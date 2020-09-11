export const normalizeEmail: (txt: string) => string = (text) => text.trim().toLowerCase();

export const areEmailsEqual = (email1: string, secondEmail: string) => {
	return email1.toLowerCase().trim() === secondEmail.toLowerCase().trim();
};
