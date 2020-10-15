'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller {
  async index() {
    this.ctx.body = 'hi i am index for admin';
  }

  async checkLogin() {
    const account = this.ctx.request.body.account;
    const password = this.ctx.request.body.password;
    const sql = " SELECT * FROM user WHERE account = '" + account +
    "' AND password = '" + password + "'";
    const res = await this.app.mysql.query(sql);
    if (res.length > 0) {
      const openId = new Date().getTime();
      this.ctx.session.openId = { openId };
      this.ctx.body = { data: '登陆成功', openId, res };
    } else {
      this.ctx.body = { data: '登陆失败' };
    }

  }

  async getTypeInfo() {
    const resType = await this.app.mysql.select('type');
    this.ctx.body = { data: resType };
  }

  async addArticle() {
    const tmpArticle = this.ctx.request.body;
    const result = await this.app.mysql.insert('article', tmpArticle);
    const insertSuccess = result.affectedRows === 1;
    const insertId = result.insertId;

    this.ctx.body = {
      isSuccess: insertSuccess,
      insertId,
    };
  }

  async updateArticle() {
    const tmpArticle = this.ctx.request.body;
    const result = await this.app.mysql.update('article', tmpArticle);
    const updateSuccess = result.affectedRows === 1;
    console.log(updateSuccess);
    this.ctx.body = {
      isSuccess: updateSuccess,
    };
  }

  async getArticleList() {
    const sql = 'SELECT article.id as id,' +
            'article.title as title,' +
            'article.introduce as introduce,' +
            'article.addTime as addTime,' +
            'article.view_count as view_count,' +
            'type.typeName as typeName ' +
            'FROM article LEFT JOIN type ON article.type_id = type.id ' +
            'ORDER BY article.id DESC';
    const resList = await this.app.mysql.query(sql);
    this.ctx.body = { data: resList };
  }

  async deleteArticle() {
    const id = this.ctx.params.id;
    const res = await this.app.mysql.delete('article', { id });
    this.ctx.body = { data: res };
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
    'FROM article LEFT JOIN type ON article.type_id=type.id ' +
    'WHERE article.id=' + id;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };

  }
}


module.exports = MainController;
