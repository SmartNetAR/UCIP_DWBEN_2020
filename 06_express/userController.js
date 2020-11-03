const userRepository = require( './userRepository' );

exports.getUsers = (req, res) => {
    res.status(200).json( userRepository.getUsers() );
}
