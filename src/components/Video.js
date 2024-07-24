import './video.css';

function Video() {
  return (
    <video controls width="600">
      <source src="https://servidor-video-publico.s3.us-east-2.amazonaws.com/Y2meta.app-Cineminuto-+Un+Dia+Mas.-(720p).mp4" type="video/mp4" />
      
    </video>
  );
}

export default Video;