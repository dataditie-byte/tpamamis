# Sanggar Belajar Mam Is – Smart X

Aplikasi web statis/PWA untuk latihan soal kelas X SMA, HOTS, penalaran, sains, literasi, dan olimpiade dasar.

## Upload ke GitHub Pages
1. Buat repository baru, misalnya `mam-is-smart-x`.
2. Upload seluruh isi folder ini ke bagian root repository.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/root`, lalu **Save**.
6. Tunggu beberapa menit hingga alamat GitHub Pages aktif.

## Menambah soal
Edit `questions.json`. Gunakan struktur:
```json
{
  "id": "MAT-004",
  "category": "Matematika Olimpiade",
  "topic": "Geometri",
  "level": 3,
  "question": "Teks soal",
  "options": ["A", "B", "C", "D"],
  "answer": 0,
  "explanation": "Pembahasan"
}
```
Nilai `answer` dimulai dari 0: A=0, B=1, C=2, D=3.
