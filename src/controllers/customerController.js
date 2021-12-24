const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM listnews order by id DESC", (err, news) => {
      if (err) {
        res.json(err);
      }
      res.render("news", {
        data: news,
      });
    });
  });
};

controller.add = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO listnews SET ?", [data], (err, news) => {
      res.redirect("/");
    });
  });
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM listnews WHERE id = ?", [id], (err, news) => {
      res.render("news_edit", {
        data: news[0],
      });
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newUpd = req.body;
  req.getConnection((err, conn) => {
    conn.query("update listnews SET ? WHERE id = ? ", [newUpd, id], (err, rows) => {
      res.redirect("/");
    });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("DELETE FROM listnews WHERE id= ?", [id], (err, rows) => {
      res.redirect("/");
    });
  });
};

module.exports = controller;
