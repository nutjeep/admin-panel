function formatRupiah(value) {
  const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
  });
  return formatter.format(value);
}

function formatDate(stringDate) {
  const date = new Date(stringDate);

  const daysInMonth = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  const day = String(date.getDate()).padStart(2, '0');
  const monthIndex = date.getMonth();
  const monthName = daysInMonth[monthIndex];
  const year = date.getFullYear();

  return `${day} ${monthName} ${year}`;
}

function formatDateTime(dateString) {
  const date = new Date(dateString);

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  // const seconds = String(date.getSeconds()).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

function getCurrentTime() {
  const currentDate = new Date();

  // Mengatur zona waktu ke GMT+7
  const localTime = new Date(currentDate.getTime() + 7 * 60 * 60 * 1000);

  // Format Jam dan menit ke dalam format hh:mm
  const hours = localTime.getUTCHours().toString().padStart(2, '0');
  const minutes = localTime.getUTCMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

function excerpt(description, maxLength) {
  if (description.length <= maxLength) {
    return description;
  }

  // Potong deskripsi hingga maxLength dan tambahkan ellipsis (...)
  return description.substring(0, maxLength) + '...';
}

const formating = {
  formatRupiah,
  formatDate,
  formatDateTime,
  getCurrentTime,
  excerpt
}

export default formating;