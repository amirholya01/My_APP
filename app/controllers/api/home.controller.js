const Controller = require("../controller");

class HomeController extends Controller{
    indexPage(req, res, next){
        try {
            return res.status(200).json({
                data: {
                    statusCode: 200,
                    message: "Welcome to the My Web Application"
                }
            })
        }catch (e) {
            next(e);
        }
    }
}
module.exports = {
    HomeController : new HomeController()
}