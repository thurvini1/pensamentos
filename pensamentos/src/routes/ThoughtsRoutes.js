

const ThoughtsController = require("../controllers/ThoughtsController")

const router = express.Router();

router.get("/thoughts/dashboard", ThoughtsController.dashboard);

router.get("/thoughts-create", ThoughtsController.registerThought);

router.post("/thoughts/create", ThoughtsController.createThought);

router.get("/thoughts/:id", ThoughtsController.findThoughts);

router.put("/thoughts/dashboard", ThoughtsController.dashboard);

router.get("/thoughts/dashboard", ThoughtsController.dashboard);
