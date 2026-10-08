# Nguci — Product Requirements Document v1.0
**Voice-to-task app, Android-only (Kotlin native).**
Disusun: 8 Oktober 2026 | Target publish: 31 Oktober 2026
Dokumen pendamping: `~/workspace/your_files/chirp-mvp/chirp-mvp.md` (scope ringkas)

---

## 1. Ringkasan Eksekutif

Nguci mengubah ucapan Bahasa Indonesia menjadi task terstruktur lengkap dengan
reminder. Pengguna menekan satu tombol mic, berbicara secara natural, dan AI
mentranskrip → memecah menjadi task-task terpisah → mengekstrak tanggal,
prioritas, dan kategori → menjadwalkan reminder. Tagline: **"Ngomong, jadi, beres."**

Berbeda dengan aplikasi to-do konvensional yang menuntut pengguna mengetik dan
mengisi form, Nguci dirancang untuk momen "kepikiran di jalan": suara adalah
satu-satunya input utama.

**Brand.** "Nguci" berasal dari bahasa Bali yang artinya "banyak ngomong".
Nama ini adalah positioning itu sendiri: aplikasi untuk orang yang nguci,
agar omongannya berubah menjadi hal yang beres. Narasi brand: *"Buat kamu
yang nguci, biar omongannya nggak hilang begitu saja."* Logo: geometris
sound-wave bars → checkmark, tanpa teks sehingga agnostik terhadap nama.

## 2. Latar Belakang & Masalah

- Pekerja Indonesia (UMKM/seller, pekerja lapangan, mahasiswa) hidup dari HP
  Android dan sering mendapat ide/tugas saat tidak bisa mengetik (di jalan,
  di pasar, di lapangan).
- Voice note WhatsApp menumpuk dan tidak actionable — ide hilang di tumpukan chat.
- Aplikasi to-do (Todoist, Google Tasks, TickTick) berbahasa Inggris-first,
  input-nya mengetik, dan tidak memahami tanggal relatif Bahasa Indonesia
  ("lusa", "tanggal 5", "nanti sore").
- Kompetitor terdekat, **Plaud AI**, membuktikan pasar "ngomong → beres" itu
  nyata (1,5 juta+ perangkat terjual) — tetapi mereka menjual **hardware**
  $159+ dan generalis 112 bahasa. Celah Nguci: software-only di HP yang sudah
  dimiliki, Bahasa Indonesia-first, dan reminder sebagai produk inti.

## 3. Tujuan Produk & Metrik Sukses

### Tujuan v1
1. Pengguna bisa mengubah satu ucapan menjadi task terjadwal dalam < 30 detik.
2. Parsing Bahasa Indonesia akurat untuk kasus umum (target §12).
3. Publish di Google Play Store akhir Oktober 2026.

### Metrik sukses (90 hari pasca-publish)
| Metrik | Target |
|---|---|
| Install organik | ≥ 500 |
| Retensi D7 (buka app ≥ 2x seminggu) | ≥ 20% |
| Voice note → task tersimpan (conversion) | ≥ 60% |
| Akurasi parse (judul + tanggal benar) | ≥ 85% |
| Rating Play Store | ≥ 4.3 |

## 4. Target Pengguna & Persona

**Primer — "Sari, 28, seller TikTok Shop di Denpasar."**
HP Android menengah. Sehari menerima puluhan chat order sambil mengurus
stok dan packing. Ide ("restock bubble wrap", "follow up supplier tanggal 10")
sering hilang. Tidak pernah membuka app to-do karena "ribet".

**Sekunder — "Budi, 35, sales lapangan."**
Seharian di jalan. Janji follow up klien menumpuk di kepala. Butuh
"ngomong, beres" tanpa mengetik sambil nyetir (saat berhenti).

**Tersier — mahasiswa** (seperti Radea sendiri): tugas, deadline, dan
reminder praktikum.

## 5. Asumsi & Batasan

- v1 Android-only, minSdk 26 (Android 8.0) — mencakup >95% perangkat aktif.
- Bahasa: Bahasa Indonesia (campur kode Inggris pasif, mis. "meeting",
  "follow up" — umum di ucapan Indonesia urban).
- Semua data task tersimpan **lokal** (Room/SQLite). Tidak ada backend
  sendiri di v1 — satu-satunya panggilan jaringan adalah STT API dan LLM API.
- Butuh koneksi internet untuk transkripsi & parsing di v1 (on-device
  whisper.cpp = fase berikutnya).
- Model bisnis: freemium (detail §11).

## 6. User Stories

**P0 (wajib v1):**
- US-01: Sebagai Sari, saya ingin menekan satu tombol dan berbicara agar
  ucapan saya menjadi task, sehingga saya tidak perlu mengetik.
- US-02: Sebagai Sari, saya ingin satu ucapan panjang dipecah menjadi
  beberapa task terpisah, sehingga "bayar kos tanggal 5, follow up Pak Budi
  minggu depan" tidak jadi satu blob.
- US-03: Sebagai Budi, saya ingin tanggal relatif Indonesia ("besok", "lusa",
  "tanggal 5", "nanti sore") dipahami otomatis, sehingga saya bicara natural.
- US-04: Sebagai pengguna, saya ingin **melihat dan mengedit hasil parse
  sebelum disimpan**, sehingga kesalahan AI tidak menjadi task sampah.
- US-05: Sebagai pengguna, saya ingin diingatkan via notifikasi pada waktu
  yang dijanjikan, sehingga task benar-benar dikerjakan.
- US-06: Sebagai pengguna, saya ingin menandai task selesai / edit / hapus
  manual, sehingga daftar saya tetap akurat.

**P1 (penting, usahakan v1):**
- US-07: Sebagai pengguna, saya ingin prioritas terdeteksi dari ucapan
  ("penting", "jangan lupa", "segera") → Tinggi.
- US-08: Sebagai pengguna, saya ingin batas harian yang jelas (10 voice
  note/hari gratis) dan penawaran upgrade yang tidak mengganggu.

**P2 (fase berikutnya):**
- US-09: Widget home screen, integrasi kalender, sinkronisasi multi-device,
  mode offline penuh, Bahasa Inggris penuh.

## 7. Persyaratan Fungsional

### 7.1 Perekaman suara
- FR-01: Tombol mic besar di tengah layar utama. Tekan untuk mulai,
  tekan lagi (atau tombol selesai) untuk berhenti.
- FR-02: Durasi maksimal **60 detik** per voice note. Tampilkan hitung mundur
  / progress bar saat merekam; otomatis berhenti di 60 detik.
- FR-03: Indikator visual saat merekam (animasi waveform + timer).
- FR-04: Izin microphone diminta saat onboarding dan saat pertama menekan mic
  (dengan penjelasan berbahasa Indonesia).
- FR-05: File audio disimpan sementara di cache internal; dihapus setelah
  transkripsi berhasil (atau setelah 24 jam jika gagal).

### 7.2 Speech-to-text
- FR-06: Bahasa STT di-set `id-ID`.
- FR-07: Arsitektur memakai interface `SttProvider` agar implementasi bisa
  diganti tanpa refactor. v1: implementasi API (OpenAI Whisper API atau
  Google Speech-to-Text — diputuskan saat spike).
- FR-08: Tampilkan status "Mentranskrip..." dengan skeleton/progress;
  timeout 30 detik → pesan error ramah + tombol "Coba lagi".
- FR-09: Hasil transkrip mentah **tidak** langsung jadi task — selalu lewat
  tahap parsing (§7.3) lalu review (§7.4).

### 7.3 Parsing LLM → task terstruktur
- FR-10: Interface `TaskParser`: input = teks transkrip + tanggal-waktu
  sekarang; output = JSON terstruktur:
  ```json
  {
    "tasks": [
      {
        "title": "Bayar kos",
        "due_date": "2026-11-05",
        "due_time": null,
        "priority": "high",
        "category": "keuangan"
      }
    ]
  }
  ```
- FR-11: Aturan tanggal Indonesia yang WAJIB ditangani:
  | Ucapan | Aturan |
  |---|---|
  | "besok", "lusa" | +1 / +2 hari dari hari ini |
  | "minggu depan" | Senin minggu depan (atau +7 hari — pilih satu, konsisten) |
  | "tanggal 5" | tanggal 5 bulan ini; jika sudah lewat → bulan depan |
  | "nanti sore" | hari ini 17:00 |
  | "akhir bulan" | hari terakhir bulan berjalan |
  | tanpa tanggal | `due_date = null`, tanpa reminder (JANGAN ditebak) |
- FR-12: Multi-task: pisahkan berdasarkan kata sambung dan konteks
  ("terus", "sama", "oh iya", jeda topik).
- FR-13: Prioritas implisit: "penting", "jangan lupa", "segera", "urgent" →
  `high`; "nanti-nanti", "kalau sempat" → `low`; default `medium`.
- FR-14: Jika LLM gagal / JSON tidak valid → tampilkan pesan error ramah +
  tombol "Coba lagi" + opsi "Buat manual dari teks ini".

### 7.4 Layar review hasil parse (KRITIS — pembeda kepercayaan)
- FR-15: Setelah parsing, tampilkan layar review berisi daftar task draf
  sebagai kartu: judul (editable), tanggal (date picker), waktu (opsional,
  time picker), prioritas (chip low/medium/high), kategori (opsional).
- FR-16: Pengguna bisa edit tiap kartu, hapus kartu, atau tambah kartu manual.
- FR-17: Tombol utama "Simpan semua" dan sekunder "Buang".
- FR-18: **Tidak ada auto-save buta.** Alasan produk: parsing bisa salah, dan
  satu task sampah merusak kepercayaan lebih dari 10 task benar membangunnya.

### 7.5 Manajemen task
- FR-19: Daftar task utama: dikelompokkan "Hari ini", "Besok", "Mendatang",
  "Tanpa tanggal", "Selesai".
- FR-20: Aksi per task: tandai selesai (checkbox), edit, hapus (dengan
  konfirmasi / undo snackbar), atur ulang reminder.
- FR-21: Tambah task manual via tombol + (form sederhana).
- FR-22: Pencarian teks sederhana di daftar task.

### 7.6 Reminder & notifikasi
- FR-23: Setiap task bertanggal mendapat reminder otomatis (default: pada
  `due_time`, atau 09:00 jika hanya tanggal).
- FR-24: Implementasi: WorkManager/AlarmManager + NotificationChannel
  "Pengingat Nguci" (importance HIGH).
- FR-25: Notifikasi menampilkan judul task + tombol aksi "Tandai selesai"
  dan "Tunda 1 jam".
- FR-26: Izin notifikasi diminta saat onboarding (Android 13+ wajib runtime).

### 7.7 Freemium & paywall
- FR-27: Gratis: **10 voice note per hari** (reset 00:00 waktu lokal).
  Counter terlihat di layar utama ("7/10 tersisa hari ini").
- FR-28: Saat limit habis: dialog ramah menawarkan (a) tunggu besok, atau
  (b) upgrade ke Pro.
- FR-29: Pro v1: Rp19.000/bulan via Google Play Billing — voice note
  unlimited + nada reminder custom. (Harga final bisa disesuaikan sebelum
  submit; yang penting mekanismenya jalan.)
- FR-30: Task manual (ketik) TIDAK dibatasi — yang dibatasi hanya voice note.

### 7.8 Onboarding & pengaturan
- FR-31: Onboarding 3 layar: (1) apa itu Nguci, (2) izin mic, (3) izin
  notifikasi. Bisa di-skip, tapi fitur inti butuh kedua izin.
- FR-32: Pengaturan: nada reminder, waktu default reminder harian,
  bahasa (Indonesia saja di v1, disiapkan untuk Inggris), hapus semua data,
  kebijakan privasi, hubungi kami.

## 8. Persyaratan Non-Fungsional

- NFR-01 **Performa:** dari "berhenti merekam" → layar review tampil dalam
  < 15 detik di koneksi 4G normal (STT + LLM).
- NFR-02 **Privasi:** audio hanya dikirim ke provider STT untuk transkripsi;
  tidak disimpan permanen di server pihak ketiga oleh Nguci. Nyatakan jelas
  di privacy policy.
- NFR-03 **Keamanan:** API key LLM/STT tidak di-hardcode di APK — panggil
  via endpoint proxy minimal atau simpan di BuildConfig yang tidak
  di-commit (tambahkan `.gitignore`).
- NFR-04 **Baterai:** tidak ada background service persisten; reminder via
  sistem alarm (WorkManager/AlarmManager).
- NFR-05 **Aksesibilitas:** tombol mic ≥ 72dp, kontras teks memenuhi WCAG AA,
  semua aksi penting bisa dicapai tanpa gesture kompleks.
- NFR-06 **Crash-free rate:** ≥ 99% selama beta internal.

## 9. Arsitektur Teknis (Kotlin native)

```
app/
├── ui/            # Compose screens: Home (mic), ReviewParse, TaskList, Settings, Onboarding
├── voice/         # AudioRecorder, SttProvider (interface) + WhisperApiStt
├── parse/         # TaskParser (interface) + LlmTaskParser, IndonesianDateRules
├── data/          # Room: TaskEntity, TaskDao, AppDatabase
├── reminder/      # ReminderScheduler (WorkManager), NotificationHelper
└── billing/       # Play Billing wrapper, QuotaManager (10/hari)
```

- **UI:** Jetpack Compose, Material 3, single-activity + Navigation Compose.
- **DI:** Hilt (atau manual jika ingin memangkas dependensi).
- **Storage:** Room. Skema v1: `tasks(id, title, due_date, due_time,
  priority, category, source[voice|manual], created_at, done)`.
- **Jaringan:** Retrofit/OkHttp untuk STT API & LLM API; structured output
  (JSON mode / function calling) untuk parsing.
- **Prinsip:** semua integrasi pihak ketiga di balik interface
  (`SttProvider`, `TaskParser`) — ganti Whisper API → on-device whisper.cpp
  di v1.1 tanpa menyentuh UI.

## 10. Analisis Kompetitor

|  | Nguci | Plaud AI | Todoist (+Ramble) | Google Tasks |
|---|---|---|---|---|
| Input suara | ✅ inti produk | ✅ via hardware | ✅ (Ramble, EN) | ❌ |
| Bahasa Indonesia-first | ✅ | ❌ (112 bahasa generalis) | ❌ | ❌ |
| Parse tanggal ID ("lusa", "tanggal 5") | ✅ | ❌ | ❌ | ❌ |
| Reminder sebagai inti | ✅ | ❌ (efek samping) | ✅ | ✅ |
| Tanpa hardware tambahan | ✅ | ❌ ($159+) | ✅ | ✅ |
| Harga | Freemium | Device + langganan | Freemium | Gratis |

**Kesimpulan:** Plaud memvalidasi thesis ("ngomong, beres" laku 1,5 juta
perangkat), tetapi meninggalkan celah: pasar Indonesia, tanpa hardware,
reminder-first. Todoist punya fitur voice (Ramble) tetapi Inggris-first dan
bukan produk inti. Nguci menyerang celah itu.

## 11. Monetisasi

- **Gratis:** 10 voice note/hari, task manual unlimited, reminder standar.
- **Pro Rp19rb/bulan:** voice note unlimited, nada reminder custom,
  prioritas parse (model lebih akurat — opsional v1.1).
- **Prinsip v1:** mekanisme billing harus jalan (Play Billing terintegrasi),
  optimasi harga dilakukan setelah ada data konversi.

## 12. Kriteria Penerimaan (Definition of Done v1)

- [ ] Alur inti bekerja di HP fisik Android: rekam → transkrip → parse →
      review → simpan → notifikasi reminder berbunyi tepat waktu.
- [ ] 30+ contoh ucapan Indonesia diuji; ≥ 85% menghasilkan judul + tanggal
      + prioritas yang benar (daftar contoh di `uji-parsing.md`, dibuat saat
      fase testing).
- [ ] Batas 10 voice note/hari aktif dan tidak bisa di-bypass trivial
      (clear data dihitung? — putuskan: ya, reset via reinstall = acceptable
      di v1, dicatat sebagai known limitation).
- [ ] Crash-free ≥ 99% selama 3 hari beta internal.
- [ ] AAB ter-submit ke Play Console; listing live: ikon adaptif (dari logo
      Nguci), ≥ 2 screenshot, deskripsi Bahasa Indonesia, privacy policy.
- [ ] Lolos review Google Play dan status "Published".

## 13. Timeline (8 → 31 Oktober 2026)

| Periode | Fokus | Deliverable |
|---|---|---|
| 8–11 Okt | Scope final + stack + setup + Play Console | Repo + akun terverifikasi |
| 12–18 Okt | Spike STT + pipeline parsing + UI mic & review | Alur inti jalan (mock OK) |
| 19–25 Okt | Task list + reminder + freemium + uji 30 contoh + aset store | Beta internal |
| 26–27 Okt | Bugfix + polish | **Submit Play Store (27 Okt)** |
| 28–31 Okt | Review Google (1–3 hari) | **Publish 31 Okt** |

## 14. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Akurasi STT Bahasa Indonesia (aksen daerah, campur kode) | Tinggi | Spike awal; fallback "coba lagi"; review screen sebagai jaring pengaman |
| LLM salah parse tanggal relatif | Tinggi | Aturan tanggal eksplisit di prompt + unit test 30 contoh; review screen |
| Verifikasi akun Play Console lama | Tinggi | Mulai minggu pertama; submit 27 Okt memberi buffer 4 hari |
| Biaya API (STT+LLM) per voice note | Sedang | Batas 10/hari menekan biaya; pakai model murah (Flash/mini-class); hitung unit economics sebelum scale |
| API key bocor di APK | Sedang | Proxy minimal / BuildConfig + .gitignore; rotasi key jika bocor |

## 15. Out of Scope v1

Integrasi WhatsApp, sinkronisasi cloud/multi-device, Google Kalender,
widget home screen, Wear OS, iOS, Bahasa Inggris penuh, kolaborasi/sharing
task, mode offline penuh (on-device STT = v1.1).

---

*Dokumen hidup — perubahan scope setelah tanggal ini butuh persetujuan Radea.
Parkir: Nguci diprioritaskan setelah Whip (keputusan 2026-10-08 sore).*
