

type Book = {
	isbn: number;
	name: String;
	Publisher: String;
	author:  String;
};

export async function getAllBooks():Promise<any> {
	const response = await fetch('/BookManage')
	return await response.json()
}