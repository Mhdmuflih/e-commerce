import bcrypt from "bcryptjs";

export const passwordHashing = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword
    } catch (error) {
        throw error;
    }
}


export const passwordCompaire = async (inputPassword, dbPassword) => {
    try {
        const compairedPassword = await bcrypt.compare(inputPassword, dbPassword);
        return compairedPassword;
    } catch (error) {
        throw error;
    }
}