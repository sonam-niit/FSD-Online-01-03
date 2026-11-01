import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

let students = [
    { id: 1, name: "Amit", course: "Node JS" },
    { id: 2, name: "Preksha", course: "Angular" },
    { id: 3, name: "Khilesh", course: "React" },
]

/**
 * @swagger
 * /api/students:
 *   get:
 *     summary: Get All Students
 *     description: Fetch all registered students
 *     tags:
 *       - Students
 *     responses:
 *       200:
 *         description: Students fetched successfully
 */
app.get("/api/students", (req, res) => {
    res.status(200).json({
        success: true,
        data: students
    })
})

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get All Products
 *     description: Fetch all products
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: products fetched successfully
 */
// Query Parameters
app.get("/api/products", (req, res) => {
    const { category, limit } = req.query
    res.status(200).json({
       message: "Data fetched successfully",
       receivedParams: {
        category: category || "all",
        limit: limit || 10
       }
    })
})
/**
 * @swagger
 * /api/students/{id}:
 *   get:
 *     summary: Get Student By ID
 *     description: Fetch a specific student using student ID
 *     tags:
 *       - Students
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Student ID
 *         schema:
 *           type: integer
 *           example: 101
 *     responses:
 *       200:
 *         description: Student fetched successfully
 *       404:
 *         description: Student not found
 */
app.get("/api/students/:id", (req, res) => {
    const id = req.params.id;
    const student = students.find(s => s.id === Number(id));
    if (!student) {
        res.status(404).json({
            success: false,
            message: "Student Not found"
        })
    }
    res.status(200).json({
        success: true,
        data: student
    })
})
app.listen(3000, () => {
    console.log('Server running on Port 3000');
})