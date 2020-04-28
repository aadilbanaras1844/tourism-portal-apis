
module.exports = {
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URI,
    jwtKey: process.env.JWT_KEY,
    postgres: {
        HOST: "localhost",
        USER: "postgres",
        PASSWORD: "password",
        DB: "django_test",
        dialect: "postgres",
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
    },
    twoCheckout: {
      sellerId: 250295589371,
      privateKey: "CCDB7516-AE15-4813-A6B0-CB0BE98732F2",
      publishableKey: "98B19AE7-1325-4B4F-A25A-CA20B9A250AA",  
      secretWord: 'xAEUgcakzpVzu8FDkB4hCz38vf%7qhwPv7PTmXr7D$YHn@ck*DBZjg4*hcre3yf7',
      secretKey: 'hHsJp@Q7D^[_ZGeISl1#',
      sandbox: false,
    }
}