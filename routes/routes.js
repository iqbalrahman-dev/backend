import express from "express";
 
import * as member from "../controllers/C_member.js";
import * as metode from "../controllers/C_metode.js";
import * as paket from "../controllers/C_paket.js";
import * as penginapan from "../controllers/C_penginapan.js";
import * as pesanan_rental from "../controllers/C_pesanan_rental.js";
import * as pesanan_wisata from "../controllers/C_pesanan_wisata.js";
import * as rental from "../controllers/C_rental.js";
import * as wisata from "../controllers/C_wisata.js";
import * as kategori from "../controllers/C_kategori.js";
import * as fasilitas from "../controllers/C_fasilitas.js";
import * as galeri from "../controllers/C_galeri.js";

const router = express.Router();
 
router.get('/member/', member.getMember);
router.get('/member/:id', member.getMemberById);
router.post('/member/', member.saveMember);
router.patch('/member/:id', member.updateMember);
router.delete('/member/:id', member.deleteMember);

router.get('/metode/', metode.getMetode);
router.get('/metode/:id', metode.getMetodeById);
router.post('/metode/', metode.saveMetode);
router.patch('/metode/:id', metode.updateMetode);
router.delete('/metode/:id', metode.deleteMetode);

router.get('/paket/', paket.getPaket);
router.get('/paket/:id', paket.getPaketById);
router.post('/paket/', paket.savePaket);
router.patch('/paket/:id', paket.updatePaket);
router.delete('/paket/:id', paket.deletePaket);

router.get('/penginapan/', penginapan.getPenginapan);
router.get('/penginapan/:id', penginapan.getPenginapanById);
router.post('/penginapan/', penginapan.savePenginapan);
router.patch('/penginapan/:id', penginapan.updatePenginapan);
router.delete('/penginapan/:id', penginapan.deletePenginapan);

router.get('/pesanan_rental/', pesanan_rental.getPesananRental);
router.get('/pesanan_rental/:id', pesanan_rental.getPesananRentalById);
router.post('/pesanan_rental/', pesanan_rental.savePesananRental);
router.patch('/pesanan_rental/:id', pesanan_rental.updatePesananRental);
router.delete('/pesanan_rental/:id', pesanan_rental.deletePesananRental);

router.get('/pesanan_wisata/', pesanan_wisata.getPesananWisata);
router.get('/pesanan_wisata/:id', pesanan_wisata.getPesananWisataById);
router.post('/pesanan_wisata/', pesanan_wisata.savePesananWisata);
router.patch('/pesanan_wisata/:id', pesanan_wisata.updatePesananWisata);
router.delete('/pesanan_wisata/:id', pesanan_wisata.deletePesananWisata);

router.get('/rental/', rental.getRental);
router.get('/rental/:id', rental.getRentalById);
router.post('/rental/', rental.saveRental);
router.patch('/rental/:id', rental.updateRental);
router.delete('/rental/:id', rental.deleteRental);

router.get('/wisata/', wisata.getWisata);
router.get('/wisata/:id', wisata.getWisataById);
router.post('/wisata/', wisata.saveWisata);
router.patch('/wisata/:id', wisata.updateWisata);
router.delete('/wisata/:id', wisata.deleteWisata);

router.get('/kategori/', kategori.getKategori);
router.get('/kategori/:id', kategori.getKategoriById);
router.post('/kategori/', kategori.saveKategori);
router.patch('/kategori/:id', kategori.updateKategori);
router.delete('/kategori/:id', kategori.deleteKategori);

router.get('/galeri/', galeri.getGaleri);
router.get('/galeri/:id', galeri.getGaleriById);
router.post('/galeri/', galeri.saveGaleri);
router.patch('/galeri/:id', galeri.updateGaleri);
router.delete('/galeri/:id', galeri.deleteGaleri);

router.get('/fasilitas/', fasilitas.getFasilitas);
router.get('/fasilitas/:id', fasilitas.getFasilitasById);
router.post('/fasilitas/', fasilitas.saveFasilitas);
router.patch('/fasilitas/:id', fasilitas.updateFasilitas);
router.delete('/fasilitas/:id', fasilitas.deleteFasilitas);

// router.get('/kategori/', getKategori);
// router.post('/kategori/', saveKategori);

export default router;