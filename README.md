![](https://img.shields.io/badge/Microverse-blueviolet)

# Hello-Rails-React!

> Hello-Rails-React is a rails application that uses the react-rails gem. 

This application will display a greeting randomly en several languages.

## Built With

- ![](https://img.shields.io/badge/-RubyOnRails-red)
- ![](https://img.shields.io/badge/-JavaScript-yellow)
- ![](https://img.shields.io/badge/-React/Redux-purple)

## Getting Started

### Prerequisites

- [Ruby](https://rvm.io/) = v3.0.2
- [Rails](https://rubygems.org/gems/rails)
- [PostgreSQL](https://www.postgresql.org/download/)
- [NVM](https://github.com/nvm-sh/nvm)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) (Recommended)

To get started, first, clone this project by using the following command:

```
git clone https://github.com/ad9311/hello-rails-react.git
```

### Installaion

Before launching the application, you will need to run a few commands in this order, line by line:</br>

**NOTE:** Since react uses yarn it is recommended to use it as well.
```
yarn install or npm install
bundle install
rails db:create
rails db:migrate
rails db:seed
```

Alternatively you can run `rails db:setup` instead of the last three commands.

Then launch the application with:</br>

`rails s` (Short for `rails server`) you wil see something like this:
```
=> Booting Puma
=> Rails 6.1.4.1 application starting in development 
=> Run `bin/rails server --help` for more startup options
Puma starting in single mode...
* Puma version: 5.5.2 (ruby 3.0.2-p107) ("Zawgyi")
*  Min threads: 5
*  Max threads: 5
*  Environment: development
*          PID: 4225
* Listening on http://127.0.0.1:3000
* Listening on http://[::1]:3000
Use Ctrl-C to stop
```
Use one of the two links to open the application. Once the application is running, click the random button to get a random message.

### Troubleshooting

If you get an error, plase make sure that you followed the steps stated above correctly. Also, make sure that your software is up to date and that all necessary software is installed.

## API Usage

Api to get a random message:

| Name     | Endpoint         | Method | Header                           |
|----------|------------------|--------|----------------------------------|
| Messages | /api/v1/messages | GET    | { "Accept": "application/json" } |

## Contributing

Contributions, issues and, feature requests are welcome!

You can do it on [issues page](https://github.com/ad9311/hello-rails-react/issues).

## Show your support

Give a ⭐️ if you like this project!

## Authors

**Ángel Díaz**

- GitHub: [@ad9311](https://github.com/ad9311)
- Twitter: [@adiaz9311](https://twitter.com/adiaz9311)
- LinkedIn: [Ángel Díaz](https://www.linkedin.com/in/ad9311/)

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

![](https://img.shields.io/badge/license-MIT-green)</br>
This project is [MIT](./LICENSE) licensed.
