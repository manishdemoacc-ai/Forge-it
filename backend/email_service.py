import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from datetime import datetime
import logging

logger = logging.getLogger(__name__)

def send_contact_email(name: str, email: str, phone: str, business_type: str, message: str) -> bool:
    """
    Send contact form submission via Gmail SMTP
    """
    try:
        gmail_user = os.environ.get('GMAIL_USER')
        gmail_password = os.environ.get('GMAIL_APP_PASSWORD', '').replace(' ', '')  # Remove spaces from app password
        
        if not gmail_user or not gmail_password:
            logger.error("Gmail credentials not configured")
            return False
        
        # Create message
        msg = MIMEMultipart('alternative')
        msg['From'] = gmail_user
        msg['To'] = gmail_user  # Send to yourself
        msg['Subject'] = f"New Contact Form Submission from {name}"
        
        # Email body
        html_body = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
                    <h2 style="color: #2563eb; border-bottom: 3px solid #2563eb; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    
                    <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
                        <p style="margin: 10px 0;"><strong style="color: #2563eb;">Name:</strong> {name}</p>
                        <p style="margin: 10px 0;"><strong style="color: #2563eb;">Email:</strong> {email}</p>
                        <p style="margin: 10px 0;"><strong style="color: #2563eb;">Phone:</strong> {phone}</p>
                        <p style="margin: 10px 0;"><strong style="color: #2563eb;">Business Type:</strong> {business_type}</p>
                        
                        <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-left: 4px solid #2563eb; border-radius: 4px;">
                            <strong style="color: #2563eb;">Message:</strong>
                            <p style="margin-top: 10px; white-space: pre-wrap;">{message}</p>
                        </div>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-radius: 8px;">
                        <p style="margin: 5px 0; font-size: 14px; color: #1e40af;">
                            <strong>Received:</strong> {datetime.now().strftime('%B %d, %Y at %I:%M %p')}
                        </p>
                        <p style="margin: 5px 0; font-size: 14px; color: #1e40af;">
                            <strong>Source:</strong> Fordgeit Website Contact Form
                        </p>
                    </div>
                    
                    <div style="margin-top: 20px; text-align: center; color: #6b7280; font-size: 12px;">
                        <p>This is an automated message from your Fordgeit website.</p>
                    </div>
                </div>
            </body>
        </html>
        """
        
        # Attach HTML body
        msg.attach(MIMEText(html_body, 'html'))
        
        # Send email via Gmail SMTP
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(gmail_user, gmail_password)
            server.send_message(msg)
            
        logger.info(f"Contact email sent successfully to {gmail_user}")
        return True
        
    except Exception as e:
        logger.error(f"Failed to send contact email: {str(e)}")
        return False
