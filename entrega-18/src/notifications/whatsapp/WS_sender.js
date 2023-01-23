import twilio from 'twilio';
import dotenv from 'dotenv';
import logger from '../../loggers/Log4jsLogger.js';

dotenv.config({path: '../../.env' });

const accountSid = process.env.TWILIO_ID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const cliente = twilio(accountSid, authToken);

export async function WS_sender(_message, _id, _date, _username, _to, _elUsuario) {
        let bodymesage = `*Nuevo registro* \n*_ID:_* ${_id} \n*_Fecha:_* ${_date}\n*_Username:_* ${_username}`;
        _to=='whatsapp:undefined' ? _to = process.env.TWILIO_TO_NUMBER : _to = _to; //Si no se agrega el numero, se envia al numero de prueba
        _elUsuario==undefined ? _elUsuario = "Administrador del Sistema" : _elUsuario = _elUsuario; //Si no se agrega el usuario, se envia al admin
        logger.info("Whatsapp enviado a: ",_elUsuario," ",_to)
        try {
            const options = {
                body: bodymesage,
                from: process.env.TWILIO_FROM_NUMBER,
                to: _to,
            }
            const message = await cliente.messages.create(options);
            logger.info("Mensaje ID: ",message.sid);
        } catch (error) {
            logger.error("Whatsapp Error: ",error);
        }
}