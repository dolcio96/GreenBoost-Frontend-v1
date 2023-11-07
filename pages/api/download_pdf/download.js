
export default async function handler(req, res) {
  try {
    const { pdfUrl } = req.body;
    console.log(pdfUrl);
    const pdfResponse  = await fetch(pdfUrl);
    console.log(pdfResponse.status);
    //const pdfBlob = await pdfResponse.blob();
    const pdfBuffer = await pdfResponse.buffer();
     res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="nome_del_tuo_file.pdf"');

    res.status(200).send(pdfBuffer);

  } catch (error) {
    console.error("Si è verificato un errore durante il download del PDF:", error);
  }

};