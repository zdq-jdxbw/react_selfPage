'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  async index() {
    // 获取用户表的数据
    this.ctx.body = 'hihihihihihixxxxxxxxxxx';
  }

  async login() {
    const value = this.ctx.request.body;
    const sql = 'SELECT *' +
    "FROM user where user.account='" + value.username + "'" +
    ' AND user.password=' + value.password;
    const result = await this.app.mysql.query(sql);
    if (!result[0]) {
      console.log(222);
      this.ctx.body = { code: 400, msg: 'error', statusText: '登陆失败' };
    } else {
      this.ctx.set('Cache-Control', 'public,max-age=300');
      this.ctx.set('last-modified', 'Tue, 31 Mar 2020 09:37:37 GMT');
      this.ctx.body = { data: result };
    }
  }


  async getUserByAccount() {
    const account = this.ctx.params.id;
    const sql = 'SELECT ' +
    'user.user_ name as name,' +
    'user.user_avatar as avatar ' +

    'FROM user where user.account= ' + account;

    const result = await this.app.mysql.query(sql);


    this.ctx.body = { data: result };
  }

  async getArticleById() {
    const id = this.ctx.params.id;

    const sql = 'SELECT article.id as id,' +
    'article.title as title,' +
    'article.introduce as introduce,' +
    'article.article_content as article_content,' +
    'article.addTime as addTime,' +
    'article.view_count as view_count,' +
    'type.typeName as typeName,' +
    'type.id as typeId ' +
    'FROM article LEFT JOIN type ON article.type_id = type.id ' +
    'WHERE article.id=' + id;

    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
  }

  async getTypeInfo() {
    const result = await this.app.mysql.select('type');
    this.ctx.body = { data: result };

  }

  async getListById() {
    const id = this.ctx.params.id;
    const sql = 'SELECT article.id as id,' +
    'article.title as title,' +
    'article.introduce as introduce,' +
    'article.addTime as addTime,' +
    'article.view_count as view_count,' +
    'type.typeName as typeName ' +
    'FROM article LEFT JOIN type ON article.type_id = type.id ' +
    'WHERE type_id=' + id;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
  }
}

module.exports = HomeController;
