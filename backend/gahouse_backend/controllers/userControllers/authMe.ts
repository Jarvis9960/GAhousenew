const AuthMe = async (req: any, res: any) => {
    const user = req.user;
    console.log(req.user)
    res.status(200).send(user);

}
export default AuthMe