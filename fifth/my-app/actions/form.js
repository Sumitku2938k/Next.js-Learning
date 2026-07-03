"use server";
import fs from "fs/promises";

export const submitAction = async (formData) => {
    const name = formData.get("name");
    const address = formData.get("address");
    console.log("Name:", name);
    console.log("Address:", address);
    await fs.writeFile("data.txt", `Name: ${name}\nAddress: ${address}\n`);
};