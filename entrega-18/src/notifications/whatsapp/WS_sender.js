import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config({path: '../../.env' });

const accountSid = process.env.TWILIO_ID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
console.log(accountSid, authToken);
const cliente = twilio(accountSid, authToken);

export async function WS_sender(_message, _id, _date, _username, _movil , _email) {
        let bodymesage = `*Nuevo usuario creado* 
        \n*ID:* _${_id}_ 
        \n*Fecha:* _${_date}_
        \n*Username:* _${_username}_
        \n*Celular:* _${_movil}_
        \n*Email:*_${_email}_
        \n`;
        try {
            const options = {
                body: bodymesage,
                from: process.env.TWILIO_FROM_NUMBER,
                to: process.env.TWILIO_TO_NUMBER
            }
            const message = await cliente.messages.create(options);
            console.log(message.sid);
        } catch (error) {
            console.log(error);
        }
}