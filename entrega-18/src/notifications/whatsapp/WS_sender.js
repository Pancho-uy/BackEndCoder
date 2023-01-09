import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config({path: '../../.env' });

const accountSid = process.env.TWILIO_ID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
console.log(accountSid, authToken);
const cliente = twilio(accountSid, authToken);

export async function WS_sender(_message, _id, _date, _username) {
        let bodymesage = `*Nuevo usuario creado* \n*_ID:_* ${_id} \n*_Fecha:_* ${_date}\n*_Username:_* ${_username}`;
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