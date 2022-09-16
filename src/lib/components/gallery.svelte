<script>

</script>

<div  class="image-grid min-h-full flex relative z-[-1]">
    <div class="box-1 relative image-grid-col-2 image-grid-row-2">
        <img class="" src="/gallery/img1.jpeg" alt="architecture">
        <div id="overlayimg" class="flex justify-center items-center w-full ">
            <h1>HELLO</h1>
        </div>
    </div>
    <div class="box-2"><img src="/gallery/img6.jpeg" alt="architecture"></div>
    <div class="box-3"><img src="/gallery/img2.jpeg" alt="architecture"></div>
    <div class="box-4"><img src="/gallery/img3.jpeg" alt="architecture"></div>
    <div class="box-5"><img src="/gallery/img4.jpeg" alt="architecture"></div>

</div>
<style>


    #overlayimg{
        opacity: 1;
        top: 0%;
        position: absolute;
        height: 100%;
        padding: 5px;
        background-color: white;
        border: 2px solid red;
    }

    .image-grid{
        display: grid;
        grid-template-columns: 1fr 1fr ;
        box-sizing: border-box;
        grid-template-areas: 'item-1 item-1'
                             'item-2 item-3'
                             'item-4 item-5';


    }

    .box-1{
        grid-area: item-1;
    }



    .image-grid div{
        object-fit: cover;

    }

    img {
        width: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        -o-object-position: center;
        object-position: center;
        z-index: -1;
        height: 100%;
    }
    @media screen and (min-width: 768px) {
        .image-grid{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            box-sizing: border-box;
            grid-template-areas: 'item-1 item-1 item-2 item-3'
                             'item-1 item-1 item-4 item-5';


        }
    }
</style>