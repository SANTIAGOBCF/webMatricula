const controller = {};
/*
controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM customer', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('customers', {
        data: customers
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO customer set ?', data, (err, customer) => {
      console.log(customer)
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM customer WHERE id = ?", [id], (err, rows) => {
      res.render('customers_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE customer set ? where id = ?', [newCustomer, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}
*/
controller.list1 = (req, res) => {
  const  nom =req.params;
  console.log(nom)
  res.render('matricula', {data: nom});

};

controller.save = (req, res) => {
  const data = req.param('datos');
  const cod=req.param('cod');
  console.log(cod);
  console.log(data);
  const cur=['Calculo','Biologia','Quimica','Fisica'];
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO prueba values (?, ?,?,?,? )', [cod,data[0],data[1],data[2],data[3]], (err, customer) => {
      console.log(customer)
      res.render('made', {cod:cod,data: data,cur:cur});
      
    })
  })
};

controller.list2 = (req, res) => {
  const  nom =req.params;
  req.getConnection((err, conn) => {
    conn.query('SELECT cursos.nombreCurso FROM cursos', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('inicia', {
        data: customers, nombre:nom
     });
    });
  });
};

controller.list3 = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM customer', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('verifica', {
        data: customers
     });
    });
  });
};

controller.list4 = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM customer', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('login', {
        data: customers
     });
    });
  });
};

controller.entrar = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT COUNT(codigoAlumno) FROM alumno where apellidos="John" and contra="pass1";', (err, customers) => {
     if (err) {
      res.json(err);
     }
     if(customers>1){
      res.render('matricula', {
          data: customers
      });
    }
    });
  });
};



module.exports = controller;
