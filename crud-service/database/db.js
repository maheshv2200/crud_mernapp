import mongoose from 'mongoose';

const Connection = async (username, password) => {
    // const URL = `mongodb+srv://${username}:${password}:@cluster0.gnardal.mongodb.net/PROJECT 0?retryWrites=true&w=majority`
    const URL=`mongodb+srv://${username}:${password}@crud-app.xpnzp1j.mongodb.net/`
    try {
        // 1 - Current URL string parser is deprecated, and will be removed in a future version. 
        // 2 - Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version.

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;