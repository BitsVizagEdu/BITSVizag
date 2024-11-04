<script>
    let isTimeTableVisible = false;
    let isResultsVisible = false;
    let isNotificationVisible = false;
    let isContactUsVisible = false;

    function toggleTimeTable() {
        isTimeTableVisible = !isTimeTableVisible;
    }

    function toggleResults() {
        isResultsVisible = !isResultsVisible;
    }
    function toggleNotification() {
        isNotificationVisible = !isNotificationVisible;
    }
    function toggleContactUs() {
        isContactUsVisible = !isContactUsVisible;
    }

</script>

<section class="bg-slate-200 3xs:p-4 md:p-10 rounded-lg">
    <div class="flex flex-col-reverse justify-center items-center mx-auto">
        <div id="text" class="lg:w-[90%] 3xs:mb-3 lg:px-10">
            <div class="text-red1 3xs:text-center lg:text-center xs:text-[20px] sm:text-[25px] font-bold 3xs:pb-1 md:pb-6">
                <h2 class="text-4xl">EXAMINATION</h2>
            </div>

            <!-- Time Table Section -->
            <div class="table-row table-head cursor-pointer" on:click={toggleTimeTable}>
                <div class="table-cell first-cell last-cell flex justify-between items-center">
                    <p class="text-xl font-sans">
                        Time Table
                        <i class="fa-solid text-xl" class:fa-angle-up={isTimeTableVisible} class:fa-angle-down={!isTimeTableVisible}></i>
                    </p>
                </div>
            </div>

            {#if isTimeTableVisible}
            <div id="dropdownContent" class="table-box">
                <div class="table-row">
                    <div class="table-cell first-cell ">
                        <p class="text-sm font-serif">I B.Tech I Sem Mid Examinations Time Table</p>
                    </div>
                    <div class="table-cell last-cell">
                        <a href="/examcell_docs/BTech/examination/1st B.Tech Mid Examination Time Table.pdf" target="_blank"><i class="fa-solid fa-file-pdf fa-beat text-2xl"></i></a>
                    </div>
                </div>

            <!-- {#if isTimeTableVisible}
            <div id="dropdownContent" class="table-box">
                <div class="table-row">
                    <div class="table-cell first-cell ">
                        <p class="text-sm font-serif">I B.Tech II Sem Supplementary Examinations-Mar-2023</p>
                    </div>
                    <div class="table-cell last-cell">
                        <a href="/examcell_docs/BTech/examination/1 1-2 Supple Time Table.pdf"><i class="fa-solid fa-file-pdf fa-beat text-2xl"></i></a>
                    </div>
                </div> -->
                <!-- <div class="table-row">
                    <div class="table-cell first-cell ">
                        <p class="text-sm font-serif">III B.Tech II Sem Supplementary Examinations-Feb-2024</p>
                    </div>
                    <div class="table-cell last-cell">
                        <a href="/examcell_docs/BTech/examination/2 3-2 Supple.pdf"><i class="fa-solid fa-file-pdf fa-beat text-2xl"></i></a>
                    </div>
                </div>
                <div class="table-row">
                    <div class="table-cell first-cell ">
                        <p class="text-sm font-serif">II B.Tech II Sem Supplementary Examinations-Feb-2024</p>
                    </div>
                    <div class="table-cell last-cell">
                        <a href="/examcell_docs/BTech/examination/3 2-2 Supple.pdf"><i class="fa-solid fa-file-pdf fa-beat text-2xl"></i></a>
                    </div>
                </div>
                <div class="table-row">
                    <div class="table-cell first-cell ">
                        <p class="text-sm font-serif">I B.Tech I Sem Supplementary Examinations-Jan-2024</p>
                    </div>
                    <div class="table-cell last-cell">
                        <a href="/examcell_docs/BTech/examination/I B.Tech I Sem.pdf"><i class="fa-solid fa-file-pdf fa-beat text-2xl"></i></a>
                    </div>
                </div>
                <div class="table-row">
                    <div class="table-cell first-cell ">
                        <p class="text-sm font-serif">II B.Tech I Sem Regular & Supplementary Examinations-Dec-2023</p>
                    </div>
                    <div class="table-cell last-cell">
                        <a href="/examcell_docs/BTech/examination/II B.Tech I Sem.pdf"><i class="fa-solid fa-file-pdf fa-beat text-2xl"></i></a>
                    </div>
                </div>
                <div class="table-row">
                    <div class="table-cell first-cell ">
                        <p class="text-sm font-serif">III B.Tech I Sem Regular & Supplementary Examinations-Dec-2023</p>
                    </div>
                    <div class="table-cell last-cell">
                        <a href="/examcell_docs/BTech/examination/III B.Tech I Sem.pdf"><i class="fa-solid fa-file-pdf fa-beat text-2xl"></i></a>
                    </div>
                </div>
                <div class="table-row">
                    <div class="table-cell first-cell ">
                        <p class="text-sm font-serif">IV B.Tech I Sem Regular & Supplementary Examinations-Dec-2023</p>
                    </div>
                    <div class="table-cell last-cell">
                        <a href="/examcell_docs/BTech/examination/IV B.Tech I Sem.pdf"><i class="fa-solid fa-file-pdf fa-beat text-2xl"></i></a>
                    </div>
                </div> -->
                
            </div>
            {/if}

            <!-- Results Section -->
            <!-- <div class="table-row table-head cursor-pointer" on:click={toggleResults}>
                <div class="table-cell first-cell last-cell flex justify-between items-center">
                    <p class="text-xl font-sans">
                        Results
                        <i class="fa-solid text-xl" class:fa-angle-up={isResultsVisible} class:fa-angle-down={!isResultsVisible}></i>
                    </p>
                </div>
            </div>

            {#if isResultsVisible}
            <div id="dropdownContent" class="table-box">
                <div class="table-row">
                    <div class="table-cell first-cell">
                        <p class="text-xl font-serif">R20 Results</p>
                    </div>
                    <div class="table-cell last-cell">
                        <a href="#"><i class="fa-solid fa-file-pdf fa-beat text-2xl"></i></a>
                    </div>
                </div>

                <div class="table-row">
                    <div class="table-cell first-cell">
                        <p class="text-xl font-serif">R19 Results</p>
                    </div>
                    <div class="table-cell last-cell">
                        <a href="#"><i class="fa-solid fa-file-pdf fa-beat text-2xl"></i></a>
                    </div>
                </div>

                <div class="table-row">
                    <div class="table-cell first-cell">
                        <p class="text-xl font-serif">R16 Results</p>
                    </div>
                    <div class="table-cell last-cell">
                        <a href="#"><i class="fa-solid fa-file-pdf fa-beat text-2xl"></i></a>
                    </div>
                </div>

                <div class="table-row">
                    <div class="table-cell first-cell">
                        <p class="text-xl font-serif">R13 Results</p>
                    </div>
                    <div class="table-cell last-cell">
                        <a href="#"><i class="fa-solid fa-file-pdf fa-beat text-2xl"></i></a>
                    </div>
                </div>
            </div>
            {/if}
 -->


             <!-- Notification Section -->
             <div class="table-row table-head cursor-pointer" on:click={toggleNotification}>
                <div class="table-cell first-cell last-cell flex justify-between items-center">
                    <p class="text-xl font-sans">
                        Notifications
                        <i class="fa-solid text-xl" class:fa-angle-up={isNotificationVisible} class:fa-angle-down={!isNotificationVisible}></i>
                    </p>
                </div>
            </div>

            {#if isNotificationVisible}
            <div id="dropdownContent" class="table-box">
                <div class="table-row">
                    <div class="table-cell first-cell ">
                        <p class="text-sm font-serif">IV B.Tech I Sem Regular and Supply <br> Examinations-October-2024</p>
                    </div>
                    <div class="table-cell last-cell">
                        <a href="/examcell_docs/BTech/examination/notification/IV-B.Tech Regular and Supply Examination.pdf" target="_blank"><i class="fa-solid fa-file-pdf fa-beat text-2xl"></i></a>
                    </div>
                </div>
                <!-- <div class="table-row">
                    <div class="table-cell first-cell ">
                        <p class="text-sm font-serif">IV B.Tech I Sem Advanced Supplementary Examinations-April-2024</p>
                    </div>
                    <div class="table-cell last-cell">
                        <a href="/examcell_docs/BTech/examination/notification/1 IV B. TECH I.pdf"><i class="fa-solid fa-file-pdf fa-beat text-2xl"></i></a>
                    </div>
                </div>
                <div class="table-row">
                    <div class="table-cell first-cell ">
                        <p class="text-sm font-serif">IV B.Tech II Sem Reg & Supplementary Examinations-April-2024</p>
                    </div>
                    <div class="table-cell last-cell">
                        <a href="/examcell_docs/BTech/examination/notification/2 IVB. TECH II.pdf"><i class="fa-solid fa-file-pdf fa-beat text-2xl"></i></a>
                    </div>
                </div>
                <div class="table-row">
                    <div class="table-cell first-cell ">
                        <p class="text-sm font-serif">III B.Tech II Sem Reg & Supplementary Examinations-April-2024</p>
                    </div>
                    <div class="table-cell last-cell">
                        <a href="/examcell_docs/BTech/examination/notification/3 B. TECH I.pdf"><i class="fa-solid fa-file-pdf fa-beat text-2xl"></i></a>
                    </div>
                </div>
                <div class="table-row">
                    <div class="table-cell first-cell ">
                        <p class="text-sm font-serif">II B.Tech II Sem Reg & Supplementary Examinations-April-2024</p>
                    </div>
                    <div class="table-cell last-cell">
                        <a href="/examcell_docs/BTech/examination/notification/4 II B. TECH II.pdf"><i class="fa-solid fa-file-pdf fa-beat text-2xl"></i></a>
                    </div>
                </div>
                <div class="table-row">
                    <div class="table-cell first-cell ">
                        <p class="text-sm font-serif">I B.Tech II Sem Supplementary Examinations-Mar-2023</p>
                    </div>
                    <div class="table-cell last-cell">
                        <a href="/examcell_docs/BTech/examination/notification/5 I B.TECH II.pdf"><i class="fa-solid fa-file-pdf fa-beat text-2xl"></i></a>
                    </div>
                </div>
                <div class="table-row">
                    <div class="table-cell first-cell ">
                        <p class="text-sm font-serif">III B.Tech II Sem Supplementary Examinations-Feb-2024</p>
                    </div>
                    <div class="table-cell last-cell">
                        <a href="/examcell_docs/BTech/examination/notification/6 III B. Tech II.pdf"><i class="fa-solid fa-file-pdf fa-beat text-2xl"></i></a>
                    </div>
                </div>
                <div class="table-row">
                    <div class="table-cell first-cell ">
                        <p class="text-sm font-serif">II B.Tech II Sem Supplementary Examinations-Feb-2024</p>
                    </div>
                    <div class="table-cell last-cell">
                        <a href="/examcell_docs/BTech/examination/notification/7 III B. Tech II.pdf"><i class="fa-solid fa-file-pdf fa-beat text-2xl"></i></a>
                    </div>
                </div> -->
            </div>
            {/if}


             <!-- Contact Us Section -->
             <div class="table-row table-head cursor-pointer" on:click={toggleContactUs}>
                <div class="table-cell first-cell last-cell flex justify-between items-center">
                    <p class="text-xl font-sans">
                        Contact Us
                        <i class="fa-solid text-xl" class:fa-angle-up={isContactUsVisible} class:fa-angle-down={!isContactUsVisible}></i>
                    </p>
                </div>
            </div>

            {#if isContactUsVisible}
            <div id="dropdownContent" class="table-box">
                <div class="table-row">
                    <div class="table-cell first-cell">
                        <p class="text-xl font-serif">Land Line</p>
                    </div>
                    <div class="table-cell last-cell">
                        <p class="text-xl font-serif">0891-2569944</p>
                    </div>
                </div>
                <div class="table-row">
                    <div class="table-cell first-cell">
                        <p class="text-xl font-serif">Controller of Examination</p>
                    </div>
                    <div class="table-cell last-cell">
                        <p class="text-xl font-serif">Dr.D.N.Murti - 9398688852</p>
                    </div>
                </div>
                <div class="table-row">
                    <div class="table-cell first-cell">
                        <p class="text-xl font-serif">Assistant Controller of Examination</p>
                    </div>
                    <div class="table-cell last-cell">
                        <p class="text-xl font-serif">Ravindra - 8919641346</p>
                    </div>
                </div>
                
            </div>
            {/if}
        </div>
    </div>
</section>

<!-- Styles -->
<style>
.table-box {
    margin: 20px auto;
}

.table-row {
    display: table;
    width: 100%;
    margin: 10px auto;
    font-family: sans-serif;
    background: transparent;
    padding: 12px 0;
    color: #000000;
    font-size: 13px;
    box-shadow: 0 1px 4px 0px rgba(0, 0, 50, 0.3);
}
.table-head {
    background: #1E3A8A;
    box-shadow: none;
    color: #fff;
    padding: 18px;
    font-size: 18px;
    font-weight: bold;
    font-family: Arial;
}
.table-head .table-cell {
    border-right: none;
}
.table-cell {
    display: table-cell;
    width: 50%;
    text-align: center;
    padding: 4px 0;
    border-right: 1px solid #d6d4d4;
    vertical-align: middle;
}
.last-cell {
    border-right: none;
}
a {
    text-decoration: none;
    color: #000000;
}
@media only screen and (max-width: 600px) {
    .table-row {
        font-size: 13px;
    }
}
</style>
