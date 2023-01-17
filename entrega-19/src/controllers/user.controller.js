import {UsuarioService} from '../services/usuario.service.js';
import {sendemail} from "../notifications/gmail/EmailSender.js";
import {WS_sender} from '../notifications/whatsapp/WS_sender.js';
import {htmlNewUserTemplate} from "../notifications/gmail/htmltemplates/NewUserCreatedTemplate.js";


const usuarioService = new UsuarioService();

export async function logInView(req, res) {
    if (req.session.login) {
        res.redirect('/api/usuario')
    } else {
        res.render('pages/login', {status: false})
    }
}

export async function signUpView(req, res) {
    if (req.session.login) {
        res.redirect('/api/usuario')
    } else {
        res.render('pages/signup', {status: false})
    }
}

export async function signUp(req, res) {
    const { body } = req;
    const newUser = await usuarioService.createUser(body);

    if (newUser) {
        const now = new Date();
        const newUserTemplateEmail = htmlNewUserTemplate(newUser._id, now.toLocaleString(), newUser.username);
        await sendemail('Nuevo registro', newUserTemplateEmail);
        
        // Whatsapp al administrador del sistema
        await WS_sender('Nuevo registro', newUser._id, now.toLocaleString(), newUser.username);
        // Whatsapp al usuario registrado
        await WS_sender('Nuevo registro', newUser._id, now.toLocaleString(), newUser.username, newUser.movil, newUser.username);
        res.status(200).json({"exito": "Usuario "+newUser.username+" agregado con el ID " + newUser._id})
    } else {
        res.status(400).json({"error": "there was an error, please verify the body content match the schema"})
    }
}

export async function logIn(req, res) {
    const {user, pass} = req.body;
    const loggedUser = await usuarioService.loginUser({
        username: user,
        password: pass
    });

    if (loggedUser) {
        req.session.login=true;
        res.redirect('/api/usuario')
    } else {
        req.session.login=false;
        res.redirect('/api/usuario/login')
    }
}

export async function homeView(req, res) {
    res.render('pages/home', {status: req.session.login})
}

export async function logOutView(req, res) {
    if (!req.session.login) {
        res.redirect('/api/usuario')
    } else {
        req.session.destroy( (err) => {
            if (err) {
                res.json(err);
            } else {
                res.render('pages/logout', {status: false});
            }
        })
    }
}
