
/*
 * GET users listing.
 */

exports.listall = function(req, res){

  req.getConnection(function(err,connection){

        var query = connection.query('SELECT * FROM customerdemo',function(err,rows)
        {

            if(err)
                console.log("Error Selecting : %s ",err );

            res.render('customers_web_all',{page_title:"Customers - List",data:rows});


         });

    });

};
