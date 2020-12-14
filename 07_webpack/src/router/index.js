import taskRoutes from "../tasks/routes";

function router(app) {

    app.use( '/tasks', taskRoutes )
    
}

export default router;