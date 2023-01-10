import {createTransport} from 'nodemailer';
import logger from '../../loggers/Log4jsLogger.js';
import dotenv from 'dotenv';

dotenv.config({path: '../../.env' });

const transporter = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: process.env.MAIL_ACCOUNT,
        pass: process.env.MAIL_PASSWORD
    }
});

const mailOptions = (emailSubject, htmlTemplate) => {
    return {
        from: 'BACKEND <Entrega 18>',
        to: process.env.MAIL_CREA_CUENTA,
        subject: emailSubject,
        html: htmlTemplate
    }
}

export async function sendemail(subject, htmlTemplate) {
    try {
        const mailOpt = mailOptions(
            subject,
            htmlTemplate
        );
        
        await transporter.sendMail(mailOpt);
        logger.info(`Email enviado a ${process.env.MAIL_CREA_CUENTA}`)
    } catch (error) {
        logger.error(error);
    }
}

