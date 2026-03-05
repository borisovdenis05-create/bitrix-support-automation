import json
import os
import urllib.request
import urllib.parse


def handler(event: dict, context) -> dict:
    """
    Принимает заявку с сайта и отправляет в Telegram-бот @it_25_bot.
    Поля: name, phone, message (опционально), crm (опционально).
    """
    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    try:
        body = json.loads(event.get("body") or "{}")
    except Exception:
        return {"statusCode": 400, "headers": cors_headers, "body": json.dumps({"error": "Invalid JSON"})}

    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()
    message = body.get("message", "").strip()
    crm = body.get("crm", "").strip()
    source = body.get("source", "Сайт").strip()

    if not name or not phone:
        return {"statusCode": 400, "headers": cors_headers, "body": json.dumps({"error": "name and phone required"})}

    token = os.environ.get("TELEGRAM_BOT_TOKEN", "")
    chat_id = os.environ.get("TELEGRAM_CHAT_ID", "")

    if not token or not chat_id:
        return {"statusCode": 500, "headers": cors_headers, "body": json.dumps({"error": "Bot not configured"})}

    lines = [
        "📩 <b>Новая заявка с сайта IT25</b>",
        "",
        f"👤 <b>Имя:</b> {name}",
        f"📱 <b>Телефон:</b> {phone}",
    ]
    if crm:
        lines.append(f"🔧 <b>CRM/Направление:</b> {crm}")
    if message:
        lines.append(f"💬 <b>Задача:</b> {message}")
    lines.append(f"\n📍 <b>Источник:</b> {source}")

    text = "\n".join(lines)

    tg_url = f"https://api.telegram.org/bot{token}/sendMessage"
    payload = json.dumps({
        "chat_id": chat_id,
        "text": text,
        "parse_mode": "HTML",
    }).encode("utf-8")

    req = urllib.request.Request(tg_url, data=payload, headers={"Content-Type": "application/json"}, method="POST")
    resp = urllib.request.urlopen(req, timeout=10)
    resp_body = json.loads(resp.read())

    if not resp_body.get("ok"):
        return {"statusCode": 502, "headers": cors_headers, "body": json.dumps({"error": "Telegram error", "detail": resp_body})}

    return {"statusCode": 200, "headers": cors_headers, "body": json.dumps({"ok": True})}
