export const double = function (request, response, next) {
    if (request.body.data) {
        request.body.data *= 2;
        next();
    }
    else
        return response.status(403);
}