export function slugHash(slug: string) {
  return slug.split('').reduce((total, char) => total + char.charCodeAt(0), 0);
}

export function seededSpots(slug: string, label = '') {
  const weekSeed = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 7));
  return ((weekSeed + slugHash(slug + label)) % 5) + 1;
}

export function daysToNextClosingDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const fifteenth = new Date(year, month, 15);
  const endOfMonth = new Date(year, month + 1, 0);
  const nextClosing = today <= fifteenth ? fifteenth : endOfMonth;
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.max(0, Math.ceil((nextClosing.getTime() - today.getTime()) / msPerDay));
}

export function currentMonthName() {
  return new Date().toLocaleString('default', { month: 'long' });
}
