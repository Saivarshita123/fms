from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# In-memory storage for notifications (use a database in production)
notifications = []
notification_count = 0

@app.route('/send_notification', methods=['POST'])
def send_notification():
    global notification_count
    notification_count += 1
    message = request.json.get('message', 'Request has successfully sent')
    
    # Store the notification
    notifications.append({
        "id": notification_count,
        "message": message,
    })
    
    return jsonify({
        "status": "success",
        "message": "Notification added successfully",
        "notification_count": notification_count
    }), 201

@app.route('/get_notifications', methods=['GET'])
def get_notifications():
    return jsonify({
        "notification_count": notification_count,
        "notifications": notifications
    })

@app.route('/clear_notifications', methods=['POST'])
def clear_notifications():
    global notification_count
    notifications.clear()
    notification_count = 0
    return jsonify({
        "status": "success",
        "message": "Notifications cleared",
    }), 200

if __name__ == '__main__':
    app.run(debug=True)
