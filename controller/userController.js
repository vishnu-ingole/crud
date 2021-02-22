

let info = [];

exports.addUser = (req, res) => {
         const { name, city, id } = req.body;
         const data = {
                  name: name,
                  city: city,
                  id: id
         }
 
         try {
                  info.push(data);
                  res.status(201).json({
                           message: 'data added successfully!!',
                           data:info
                  })
         } catch (err) {
                  res.status(404).json({
                           message: 'data not added successfully!'
                  })

         }
         
         
}


exports.getUser = (req, res) => {
         res.status(200).json({
                  message: 'hello from user controller',
                  data:info
         })
}
