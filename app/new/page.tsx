import Upload from "../components/Upload";
import ConfirmUpload from "../components/ConfirmUpload";

export default function New() {
  return (
    <main className="bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#B3B3F1] to-[#FFFFFF] flex min-h-screen flex-col items-center justify-center">
      <Upload></Upload>
      <ConfirmUpload></ConfirmUpload>
    </main>
  );
}