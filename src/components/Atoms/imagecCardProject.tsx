interface ImageCardProjectProps {
    image: string;
}

function ImageCardProject({image}: ImageCardProjectProps) {
    return (
        <div className='image-card-project'>
            <style>
                {`
                    .image-card-project {
                        border-radius: 10px;
                        border: 2px solid rgb(151, 7, 7);
                        opacity: 0.8;
                        width: 250px;
                        height: 150px;
                        overflow: hidden;
                        flex-shrink: 0;
                        margin-top: 12px;
                        box-sizing: border-box;
                        box-shadow: 0 0 10px 0 rgba(180, 56, 56, 0.5);
                        transition: box-shadow 0.2s ease-in-out;
                    }   

                    .image-card-project img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        display: block;
                    }
                    @media (max-width: 768px) {
                        .image-card-project {
                            width: 100%;
                            max-width: 300px;
                            height: 180px;
                        }
                    }
                    @media (max-width: 480px) {
                        .image-card-project {
                            height: 150px;
                        }
                    }
                `}
            </style>
            <img src={image} alt="Project thumbnail"/>
        </div>
    )
}

export default ImageCardProject;