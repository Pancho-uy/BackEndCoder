const  { initializeApp } = require("firebase/app"); 

const config = {
  mongodb: {
    'cnxStr': 'mongodb+srv://pancho_uy:Lambare_1960@cluster0.dcuxt5d.mongodb.net/?retryWrites=true&w=majority',
     options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      serverSelectionTimeoutMS: 5000,
    } ,
  },
  firebase: {
  "type": "service_account",
  "project_id": "backendcoder-c3140",
  "private_key_id": "a6bf6ea3a67e7bee6708fa4860080076b1b995d8",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDGsnMenZCcmE9I\n84ePq8089tu76mvMBkPBomhZbACi1NQ5pLcihVviXQwuTLKdx62c2ZYvBO/ZEfXR\nJbdrMWf3CNF2xTZl9t8EoizfIoB92zwaXWLmXSB6q5h76OQ8mMfuJD7QYT2OLNuu\nFkoK2Id/2kDqK4zfhUTSwBSlO0VTi/DQvKovHpYXMisO2XaGgI5ERvFNxrFpkUiP\nV6cMDx7Xl4uBEyvhp2ZI/VEDIlhrL0eY507f31yEaf/PYdvvXI0QomDvfS74FKBp\nZe5VmFlA61ScXqLi+g2wDdyw4kXNK1e1AoZmUB5nSx/fkkLC6uq+SOgTAi4vaf7c\nJ2/ENUAdAgMBAAECggEADY3FsYxw/WWcXu8Ry7id7u8t7QMgKFIzFAXWlWb7IiBf\ne7EjNu0e5/GN76iWtJGW47CqAHoXPFjvyj0G5n5/x4en9jCctdbhvqirY+swFaW7\nU1cUdH9cxFFpPOaVjxai6Lk7Oa6war7fm1/03AmKMKv8Kp0e5m5qU+/7WIwS/hBa\nawXQRvwoziJNSE12O8i0uqYFHuWEogrltylpFfIIcVaXo8p2yZrPe9pNOsqTUJJT\nJr0yj5DjlOTwV3bjqSvUJBAyu6577B7XUgqA3qmqcs+MDCYsJq1LHg58wX33KMUp\nxCK5WNbBPUz7A8YLsR9/C0japDwb09Bnm/KkJEEscQKBgQDpPEV7oMjFpnRNdVcb\nsMqO1GXNURnNXdfZtvXu9qF9/AHdqGBnb7CyYFrebvsWk9qfVKaXLoPiuY0N0cGs\nVqTX45VoEZ066xayk4u+SKMqxsdEjmqCz7EsfrCJf7Rf6KwQnmjNbneNZ3MBEVz5\nqUNhUTQBgt82n3PsLqwcnovE2QKBgQDaFy/I5RDLTGa+J9NaZCjIh2abs+nC1DvH\nxfbK3+hwIhqIkvkcr30Rf3PNFGEWinlZ1upRNAmM/QaBcXyeHPhXWskRf0pYK97z\n04O5RmRL6Yx+BPNVxOvzlVA44V5ru/4sW31vWe8RGK8v2w9+O1f8ti9yZbfSbk4f\nBsy4ih065QKBgQDGZeKlG0wt9T4RdbM3dteXT82ZLVfJff5S0HO7ZkhRJsFfkA8R\nbczcr2IcvEMSHYtm5VcgWw0NG9GE49zfgISQsKMy92jL6ZZRKXlB0AAcLyLqikrI\nI2wO8WWyUNNakk1rhZSYy1MfEdSeH+r65KTQb4bRkkXV7SVqzvjRD3zNYQKBgGHL\nu/XOIjXH0Nq8aR5Dg7ZIYU644r4nBZeTwhM/TK/b2yIbJfIjD2ZlTLxNwyukdL5A\njVpUh2PdoqkxBrywKPyjDT73YZMgOR4FXzAZzKft1r474hI398aG0i5vgTO2XUfu\nztS782QrOYOwK8ZjPhVobOZTjpaiOA3Zsrud03WxAoGBAMQCGDuL9NqGPjKVaKxi\nGIXjOjNA32n5BMS9CUfaaOyIsGmezS2M21mnNl2pMu+nl1cXvYeZ8l/L3ih/sDdd\nrNMOUx/+FMMFaES0vPyHM/dFQgXdvW5jZ8gBGCZgshMeWY/VT/8mg/9YIEb2B0fn\npZC45w5lZmXS78Xd48dC+tWE\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-d7udm@backendcoder-c3140.iam.gserviceaccount.com",
  "client_id": "115708802406613059712",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-d7udm%40backendcoder-c3140.iam.gserviceaccount.com"
}
};

module.exports = config;
