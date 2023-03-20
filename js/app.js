var startingPlayBtn = document.getElementById('starting-play-button');
var menuBtn = document.getElementById('menu-btn');
var videoContainer = document.getElementById('video-container');


function playSlide1() {
    // console.log('Slide 1')
    videoContainer.innerHTML = `
   
    
                <video class="video" id="video" preload="metadata" autoplay 
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s1.mp4" type="video/mp4"></source>
                </video>
           

            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button id="btnPrev" class="next-prev-btns prev no-tooltip">Prev</button>
                            <button id="btnNext" class="next-prev-btns next no-tooltip" onclick="playSlide2();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
    startingPlayBtn.style.display = 'none'
    menuBtn.style.display = 'block'
}

function playSlide2() {
    // console.log('Slide 2')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s2.mp4" type="video/mp4"></source>
                </video>
                <div class="start-button-main">
                <div class="start-button">
                <button id="btnNext" class="start-btn next no-tooltip" onclick="playSlide3();">Start</button>
                </div>
                </div>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide1();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide3();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide3() {
    // console.log('Slide 3')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s3.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide2();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide4();">Next</button>

                        </div>
                    </div>
                </div>
            </div>

    `
}

function playSlide4() {
    // console.log('Slide 4')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s4.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide3();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide5();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide5() {
    // console.log('Slide 5')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s5.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide4();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide6();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide6() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s6.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide5();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide7();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide7() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s7.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide6();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide8();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide8() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s8.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide7();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide9();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide9() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s9.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide8();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide10();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide10() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s10.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide9();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide11();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide11() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s11.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide10();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide12();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide12() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s12.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide11();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide13();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide13() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s13.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide12();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide14();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide14() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `


    

    <div class="text-btn-main">
        <button id="btn" class="text-btn no-tooltip" data-toggle="modal" data-target="#modal" onclick="playSlide14a()"> New to <br /> Canada</button>
        <button class="text-btn no-tooltip" > Academic Expectations </button>
        <button class="text-btn no-tooltip" > Spouses of International Students</button>
    </div>



                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s14.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide13();">Prev</button>
                            

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide14a() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `


    

    <div class="text-btn-main">
        <button class="text-btn no-tooltip visited"> New to <br /> Canada</button>
        <button id="btn" class="text-btn no-tooltip" data-toggle="modal" data-target="#modal" onclick="playSlide14b()" > Academic Expectations </button>
        <button class="text-btn no-tooltip" > Spouses of International Students</button>
    </div>


    <div class="modal-wrapper-main">
        <div class="modal-wrapper">
            <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel">New to Canada</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                            <ul class="list-simple">
                                <li>
                                    International students may be isolated beacause of a lack of friends and family in Canada.
                                </li>
                                <li>
                                    They may have to navigate an unfamiliar or new culture of dating, may lack knowledge of Canadian laws and be unaware of resources available to them.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    







                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s14a.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide13();">Prev</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide14b() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `


    

    <div class="text-btn-main">
        <button class="text-btn no-tooltip visited"> New to <br /> Canada</button>
        <button class="text-btn no-tooltip visited"> Academic Expectations </button>
        <button id="btn" class="text-btn no-tooltip" data-toggle="modal" data-target="#modal"  onclick="playSlide14c()" > Spouses of International Students</button>
    </div>


    <div class="modal-wrapper-main">
        <div class="modal-wrapper">
            <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel">Academic Expectations</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                            <ul class="list-simple">
                                <li>
                                    Physical and psychological abuse can affect academic performance.
                                </li>
                                <li>
                                    International victims face extra difficulty because students must be in good academic standing to remain in school in Canada.
                                </li>
                                <li>
                                    A fear of being sent home may also act as a barrier to disclosure.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    







                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s14b.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide13();">Prev</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide14c() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `


    

    <div class="text-btn-main">
        <button class="text-btn no-tooltip visited"> New to <br /> Canada</button>
        <button class="text-btn no-tooltip visited"> Academic Expectations </button>
        <button id="btn" class="text-btn no-tooltip visited" data-toggle="modal" data-target="#modal"> Spouses of International Students</button>
    </div>


    <div class="modal-wrapper-main">
        <div class="modal-wrapper">
            <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel">Spouses of International Students</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                            <ul class="list-simple">
                                <li>
                                    Spouses of International students may face additional challenges because they are dependent on their partners and may fear that their partner will be deported if they report abuse, thus ruining their educational or career paths.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    







                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s14c.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide13();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide15();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide15() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s15.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide14();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide16();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide16() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s16.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide15();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide17();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide17() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s17.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide16();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide18();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide18() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s18.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide17();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide19();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide19() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s19.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide18();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide20();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide20() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s20.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide19();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide21();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide21() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s21.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide20();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide22();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide22() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s22.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide21();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide23();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide23() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s23.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide22();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide24();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide24() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s24.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide23();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide25();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide25() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s25.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide24();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide26();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide26() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s26.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide25();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide27();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide27() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s27.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide26();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide28();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide28() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s28.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide27();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide29();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide29() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s29.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide28();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide30();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide30() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s30.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide29();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide31();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide31() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s31.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide30();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide32();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide32() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s32.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide31();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide33();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide33() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s33.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide32();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide34();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide34() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s34.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide33();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide35();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide35() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s35.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide34();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide36();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide36() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s36.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide35();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide37();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide37() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s37.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide36();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide38();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide38() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s38.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide37();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide39();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide39() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s39.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide38();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide40();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide40() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s40.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide39();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide41();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide41() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s41.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide40();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide42();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide42() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s42.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide41();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide43();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide43() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s43.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide42();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide44();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide44() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s44.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide43();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide45();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide45() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s45.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide44();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide46();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide46() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s46.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide45();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide47();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide47() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s47.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide46();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide48();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide48() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s48.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide47();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide49();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide49() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s49.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide48();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide50();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide50() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s50.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide49();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide51();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide51() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s51.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide50();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide52();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide52() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s52.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide51();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide53();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide53() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s53.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide52();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide54();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide54() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s54.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide53();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide55();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide55() {
    // console.log('Slide 6')
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s55.mp4" type="video/mp4"></source>
                </video>
            <div class="video-controls-main">
                <div class="video-controls " id="video-controls">
                    <div class="bottom-controls">
                        <div class="left-controls">
                            <button data-title="Play" id="play" class="white-icon play-button" onclick="togglePlay()">
                                <svg class="playback-icons">
                                    <use id="myPlayBtn" href="#play-icon"></use>
                                    <use id="myPauseBtn" class="hidden" href="#pause"></use>
                                </svg>
                            </button>

                            <div class="video-progress">
                                <progress id="progress-bar" value="0" min="0"></progress>
                                <input class="seek" id="seek" value="0" min="0" type="range" step="1" onmousemove="updateSeekTooltip(event)" oninput="skipAhead(event)">
                            </div>
                            <button data-title="Replay" id="replay" class="white-icon replay-icon" onclick="rePlay()">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                </svg>
                                
                            </button>
                        </div>

                        <div class="right-controls">
                            <div class="volume-controls">
                                <button data-title="Mute" class="volume-button" id="volume-button" onclick="toggleMute()">
                                    <svg>
                                        <use class="hidden" href="#volume-mute"></use>
                                        <use class="hidden" href="#volume-low"></use>
                                        <use href="#volume-high"></use>
                                    </svg>
                                </button>
                                <input class="volume" id="volume" value="1" data-mute="0.5" type="range" max="1" min="0" step="0.01" oninput="updateVolume()">
                            </div>

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide54();">Prev</button>
                            <button class="next-prev-btns next no-tooltip">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

/*---------- Video Player Functions ----------*/

function rePlay() {
    // console.log('rePlay')
    const video = document.getElementById('video');
    video.currentTime = 0;
    if (video.paused || video.ended) {
        video.play();
    }
}

function togglePlay() {
    // console.log('togglePlay')
    const video = document.getElementById('video');

    if (video.paused || video.ended) {
        video.play();
    } else {
        video.pause();
    }
}

function initializeVideo() {
    // console.log('initializeVideo')
    const video = document.getElementById('video');
    const progressBar = document.getElementById('progress-bar');
    const seek = document.getElementById('seek');

    const videoDuration = Math.round(video.duration);
    seek.setAttribute('max', videoDuration);
    progressBar.setAttribute('max', videoDuration);
}

function updatePlayButton() {
    // console.log('updatePlayButton')
    const playBtn = document.getElementById('myPlayBtn');
    const pauseBtn = document.getElementById('myPauseBtn');
    const video = document.getElementById('video');
    const playButton = document.getElementById('play');

    if (video.paused || video.ended) {
        playBtn.classList.remove('hidden');
        pauseBtn.classList.add('hidden');
        playButton.setAttribute('data-title', 'Play');
    } else {
        playBtn.classList.add('hidden');
        pauseBtn.classList.remove('hidden');
        playButton.setAttribute('data-title', 'Pause');
    }
}

function updateProgress() {
    // console.log('updateProgress')
    const seek = document.getElementById('seek');
    const video = document.getElementById('video');
    const progressBar = document.getElementById('progress-bar');

    seek.value = Math.floor(video.currentTime);
    progressBar.value = Math.floor(video.currentTime);
}

function updateSeekTooltip(event) {
    // console.log('updateSeekTooltip')
    const seek = document.getElementById('seek');

    const skipTo = Math.round(
        (event.offsetX / event.target.clientWidth) *
        parseInt(event.target.getAttribute('max'), 10)
    );
    seek.setAttribute('data-seek', skipTo);
}

function skipAhead(event) {
    // console.log('skipAhead')
    const video = document.getElementById('video');
    const progressBar = document.getElementById('progress-bar');
    const seek = document.getElementById('seek');

    const skipTo = event.target.dataset.seek
        ? event.target.dataset.seek
        : event.target.value;
    video.currentTime = skipTo;
    progressBar.value = skipTo;
    seek.value = skipTo;
}

function updateVolume() {
    // console.log('updateVolume')
    const video = document.getElementById('video');

    if (video.muted) {
        video.muted = false;
    }
    video.volume = volume.value;
}

function updateVolumeIcon() {
    // console.log('updateVolumeIcon')
    const volumeIcons = document.querySelectorAll('.volume-button use');
    const volumeButton = document.getElementById('volume-button');
    const video = document.getElementById('video');
    const volumeMute = document.querySelector('use[href="#volume-mute"]');
    const volumeLow = document.querySelector('use[href="#volume-low"]');
    const volumeHigh = document.querySelector('use[href="#volume-high"]');

    volumeIcons.forEach((icon) => {
        icon.classList.add('hidden');
    });
    volumeButton.setAttribute('data-title', 'Mute');
    if (video.muted || video.volume === 0) {
        volumeMute.classList.remove('hidden');
        volumeButton.setAttribute('data-title', 'Unmute');
    } else if (video.volume > 0 && video.volume <= 0.5) {
        volumeLow.classList.remove('hidden');
    } else {
        volumeHigh.classList.remove('hidden');
    }
}

function toggleMute() {
    // console.log('toggleMute')
    const video = document.getElementById('video');
    const volume = document.getElementById('volume');

    video.muted = !video.muted;
    if (video.muted) {
        volume.setAttribute('data-volume', volume.value);
        volume.value = 0;
    } else {
        volume.value = volume.dataset.volume;
    }
}



/*---------- Video Player Functions ----------*/