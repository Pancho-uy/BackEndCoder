const config = {
  mongodb: {
    cnxStr: "mongodb://localhost:27017/ecommerce",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      serverSelectionTimeoutMS: 5000,
    },
  },
  firebase: {
    "type": "service_account",
    "project_id": "segunda-entrega-367314",
    "private_key_id": "2fd41b83bca8ea124c68fd8843c936699b1bc91c",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDdWex2UCfMUSPd\nnyPZmMNkvIF+RZTXVfvuVwl5yfWPdTOL6VU+fX+zECan1/jTnXjT+BfqmOEto8mZ\nzVSRIE9Dtp1hzz2CXoVdZYI1vuwQ83yQQp3ytejBBSBflkQTgDRmVnm4pxtDNZmI\n0JdUhz7v7G96IqtpmJT6F5MtyVImtWzYT9r2qiXVZRtGyeRp/KcG0CHIG1tbhyqq\nxo6nskG2numobMaQ2C0uShBZfEsup+EO0f2HuvWyjwlE5Cs4vN9JZwHU2/L6SNoR\n6cAcVXcweQpA22k2vOxLoW0YCORntkENdl6WRkNvyiV6UOVUOXx4wS+jHZonqE0o\nkIp3hR/fAgMBAAECggEASp5+3V+mGvWbfqGgR0F9VR9LFBNG2tTMqgtDUYAovOTI\nrLjLGNbbzrR6I4jmBAiI7AQto9NHzcfyNVwHzyiyL+SG56siVCmjEdofbBjhodFD\nQ6qBbomuXitpP2/7oQtOHtW2EO6cfSq7iGixKziwmdb9uZGocV+TkT+TSRMeE5fj\nBvh0BFofy5/vS7GK7u2ITJ9CzTVVQ5jt0V+7Oo7u4YwRUiRLUUoZFyEUNoqEi8dL\nLI+5vUaGnoT7kifgpG3RD2xyoEF9dija+W6yqjFAowfWcW+dwBWDZP3z7uOSQiRx\n2WWzIvjcBQ/A7dq/7Zcwhcl2zSCk31hul8x0BNNM6QKBgQDxkQZAX/o4PPI4W3ie\nPWklwFBr+AUsGMcCGtagMD+MUSYREzakqfNhKWeGKb4f5S0WMZwl/nkXSzUUWtgk\ngISiHPGepVcYbqP7kuNKvHWfBsFx0ud+0UJ6/ke4AvOejRU9/kLStHM17LDblPBS\nWXhVlwtPwXC8te1zaxp/ZK0x8wKBgQDqk7BrOL8m97BG+wUvIgmxkd5IEDWsc5zE\nCcikr7brHCLYlJcXHnBW4S6nQIZFQzN+7wVzFcwtTTn5d2temzkFb4JCrMP/IYLz\niRk0q/4rqIkZ8zf0XXH3d3F/QsQrzB0IIvCcjG/jWLb7PtLuuXVPqG8mYkdHSJRe\nnCKguK2pZQKBgAhBrLUGksbZTm4eskC2WKGxsQ3/rC2VqzenMy7Gd2WUYHi072kx\nZeAsSh2Lz7PHYYMgrvWdfQYOzAGmGT0mJ2JjGt8RR6jOH0y5+IrVZi/JS1NYohDz\nlhIeHtVrRGhm6hL0XdRV1ppBPMpEjPJDnJlQUFKpifDpRvRq9Lzl9AWBAoGBAOUz\nZ0ZszQFjNJ82OCuEg5o4H8uj4v3cfQljUePwOLdi531dOoABYtzQ64fKWSel8NQO\n8fEwFC8TbRkeoQ9wdXelK87ABkXsVYplo/Y+M3wvEb8EUeD3yRp2X7Rr5UeyCY/g\nq98arVyjWy8EhI9zMHej6O7FSkYRWb9TqdYGfNCtAoGAYrGzqEuvOLZrxRRWEm/s\nmlylotN3Glei/pSjmKfWtE24+v07gPzvsRy4FdL/kd6glkxbLpOo+Vlyyfz380or\neFgY5ay/+hWm63sHbeBLMYjL6vZ3gUXfQ23ycWqnJG0FvPGK5A6fGu207hkbQhkY\nG2AFRqNgpNR+w/LBiOVGOhg=\n-----END PRIVATE KEY-----\n",
    "client_email": "pancho@segunda-entrega-367314.iam.gserviceaccount.com",
    "client_id": "113747973439665176816",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/pancho%40segunda-entrega-367314.iam.gserviceaccount.com"
  },
};

module.exports = config;
