'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('generator-serverless-nodejs') + ' generator!'
    ));

    // const prompts = [{
    //   type: 'confirm',
    //   name: 'someAnswer',
    //   message: 'Would you like to enable this option?',
    //   default: true
    // }];

    const prompts = [{
      name: 'projectName',
      message: 'What name would you like to use for this project?',
      default: process.cwd().split('/').pop()
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    // Copy all non-dotfiles
    this.fs.copy(
      this.templatePath('static/**/*'),
      this.destinationRoot()
    );

    // Copy all dotfiles
    this.fs.copy(
      this.templatePath('static/.*'),
      this.destinationRoot()
    );

    // Copy all dotdirs
    this.fs.copy(
      this.templatePath('static/.*/*'),
      this.destinationRoot()
    );

    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      { projectName: this.props.projectName }
    );

    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath('README.md'),
      { projectName: this.props.projectName }
    );
  }

  install() {
    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true
    });
  }
};
