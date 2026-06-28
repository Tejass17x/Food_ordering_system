const app = express();


// Database Connection
connectDB();


// CORS Configuration
app.use(
  cors({
    origin: function (origin, callback) {

      const allowedOrigins = [
        "http://localhost:5173",
        "http://localhost:5174",
        "https://food-ordering-system-pink.vercel.app"
      ];

      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }

    },

    methods: [
      "GET",
      "POST",
      "PUT",
      "DELETE",
      "OPTIONS"
    ],

    allowedHeaders: [
      "Content-Type",
      "Authorization"
    ],

    credentials: true
  })
);


// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));