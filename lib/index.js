export default function convertToSubcurrency(amount) {
  const sanitized = String(amount).replace(/[^\d.-]/g, ""); // Removes currency symbols and letters
  const parsed = Number(sanitized);
  if (isNaN(parsed)) {
    throw new Error("Invalid amount passed to convertToSubcurrency");
  }
  return Math.round(parsed * 100);
}
