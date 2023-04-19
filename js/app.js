var startingPlayBtn = document.getElementById('starting-play-button');
var menuBtn = document.getElementById('menu-btn');
var videoContainer = document.getElementById('video-container');
var audioContainer = document.getElementById('audio-container');


function playSlide1() {
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
    audioContainer.innerHTML = `
                <audio loop autoplay>
                    <source src="./assets/audio/background_track.mp3" type="audio/mpeg">
                </audio>
    `
    startingPlayBtn.style.display = 'none'
    menuBtn.style.display = 'block'
    localStorage.clear();
}

function playSlide2() {
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
                            <!-- <button class="next-prev-btns next no-tooltip" onclick="playSlide3();">Next</button> -->

                        </div>
                    </div>
                </div>
            </div>
    `
    localStorage.setItem("slide", "playSlide2()");
}

function playSlide3() {
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
    localStorage.setItem("slide", "playSlide3()");
}

function playSlide4() {
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
    localStorage.setItem("slide", "playSlide4()");
}

function playSlide5() {
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
    localStorage.setItem("slide", "playSlide5()");
}

function playSlide6() {
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
    localStorage.setItem("slide", "playSlide6()");
}

function playSlide7() {
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
    localStorage.setItem("slide", "playSlide7()");
}

function playSlide8() {
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
    localStorage.setItem("slide", "playSlide8()");
}

function playSlide9() {
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s9.mp4" type="video/mp4"></source>
                </video>
                <div class="start-button-main why-focus-btn">
                <div class="start-button">
                <button id="btnNext" class="start-btn next no-tooltip" onclick="playSlide9a();">Why focus on women?</button>
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

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide8();">Prev</button>
                            <!-- <button class="next-prev-btns next no-tooltip" onclick="playSlide10();">Next</button> -->

                        </div>
                    </div>
                </div>
            </div>
    `
    localStorage.setItem("slide", "playSlide9()");
}

function playSlide9a() {
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s9a.mp4" type="video/mp4"></source>
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
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide9b();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide9b() {
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s9b.mp4" type="video/mp4"></source>
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
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide9c();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide9c() {
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s9c.mp4" type="video/mp4"></source>
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
    localStorage.setItem("slide", "playSlide10()");
}

function playSlide11() {
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
    localStorage.setItem("slide", "playSlide11()");
}

function playSlide12() {
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
    localStorage.setItem("slide", "playSlide12()");
}

function playSlide13() {
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
    localStorage.setItem("slide", "playSlide13()");
}

function playSlide14() {
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
    localStorage.setItem("slide", "playSlide14()");
}

function playSlide14a() {
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
                                    International students may be isolated because of a lack of friends and family in Canada.
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
    localStorage.setItem("slide", "playSlide15()");
}

function playSlide16() {
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
    localStorage.setItem("slide", "playSlide16()");
}

function playSlide17() {
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
    localStorage.setItem("slide", "playSlide17()");
}

function playSlide18() {
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
    localStorage.setItem("slide", "playSlide18()");
}

function playSlide19() {
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
    localStorage.setItem("slide", "playSlide19()");
}

function playSlide20() {
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
    localStorage.setItem("slide", "playSlide20()");
}

function playSlide21() {
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
    localStorage.setItem("slide", "playSlide21()");
}

function playSlide22() {
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
    localStorage.setItem("slide", "playSlide22()");
}

function playSlide23() {
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
    localStorage.setItem("slide", "playSlide23()");
}

function playSlide24() {
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
    localStorage.setItem("slide", "playSlide24()");
}

function playSlide25() {
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
    localStorage.setItem("slide", "playSlide25()");
}

function playSlide26() {
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
    localStorage.setItem("slide", "playSlide26()");
}

function playSlide27() {
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
    localStorage.setItem("slide", "playSlide27()");
}

function playSlide28() {
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
    localStorage.setItem("slide", "playSlide28()");
}

function playSlide29() {
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
    localStorage.setItem("slide", "playSlide29()");
}

function playSlide30() {
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
    localStorage.setItem("slide", "playSlide30()");
}

function playSlide31() {
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
    localStorage.setItem("slide", "playSlide31()");
}

function playSlide32() {
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
    localStorage.setItem("slide", "playSlide32()");
}

function playSlide33() {
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
    localStorage.setItem("slide", "playSlide33()");
}

function playSlide34() {
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
    localStorage.setItem("slide", "playSlide34()");
}

function playSlide35() {
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
    localStorage.setItem("slide", "playSlide35()");
}

function playSlide36() {
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
    localStorage.setItem("slide", "playSlide36()");
}

function playSlide37() {
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
    localStorage.setItem("slide", "playSlide37()");
}

function playSlide38() {
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
    localStorage.setItem("slide", "playSlide38()");
}

function playSlide39() {
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
    localStorage.setItem("slide", "playSlide39()");
}

function playSlide40() {
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
    localStorage.setItem("slide", "playSlide40()");
}

function playSlide41() {
    videoContainer.innerHTML = `

    <div class="text-btn-main">
        <button id="btn" class="text-btn style2 no-tooltip" data-toggle="modal" data-target="#modal" onclick="playSlide41a()"> Observe Changed<br />  Behavior</button>
        <button class="text-btn style2 no-tooltip" > Approach Her </button>
        <button class="text-btn style2 no-tooltip" > Be Non-Judgemental</button>
        <button class="text-btn style2 no-tooltip" > Respect Her Choices</button>
    </div>


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
                            <!-- <button class="next-prev-btns next no-tooltip" onclick="playSlide42();">Next</button> -->

                        </div>
                    </div>
                </div>
            </div>
    `
    localStorage.setItem("slide", "playSlide41()");
}

function playSlide41a() {
    videoContainer.innerHTML = `

    <div class="text-btn-main">
        <button class="text-btn style2 no-tooltip visited" > Observe Changed<br />  Behavior</button>
        <button id="btn" class="text-btn style2 no-tooltip" data-toggle="modal" data-target="#modal" onclick="playSlide41b()"> Approach Her </button>
        <button class="text-btn style2 no-tooltip" > Be Non-Judgemental</button>
        <button class="text-btn style2 no-tooltip" > Respect Her Choices</button>
    </div>


    <div class="modal-wrapper-main">
        <div class="modal-wrapper">
            <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel">Observe Changed Behavior</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                            <p class="modal-para"> You may observe signs that you, your friend or classmate is in an abusive relationship such as: </p>
                            <ul class="list-simple">
                                <li>
                                She cancels plans with friends more often than before.
                                </li>
                                <li>
                                She gives up things that are important to her, including friends, family, hobbies, etc.
                                </li>
                                <li>
                                She becomes isolated from family and friends.
                                </li>
                                <li>
                                She worries about making the partner angry.
                                </li>
                                <li>
                                She shows signs of physical abuse like bruises or cuts.
                                </li>
                                <li>
                                She feels embarrassed or ashamed about what's going on in their relationship.
                                </li>
                                <li>
                                She consistently makes excuses for their partner's behavior.
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
                    <source src="./assets/videos/s41a.mp4" type="video/mp4"></source>
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
                            <!-- <button class="next-prev-btns next no-tooltip" onclick="playSlide42();">Next</button> -->

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide41b() {
    videoContainer.innerHTML = `

    <div class="text-btn-main">
        <button class="text-btn style2  no-tooltip visited" > Observe Changed<br />  Behavior</button>
        <button class="text-btn style2  no-tooltip visited"> Approach Her </button>
        <button id="btn" class="text-btn style2  no-tooltip" data-toggle="modal" data-target="#modal" onclick="playSlide41c()" > Be Non-Judgemental</button>
        <button class="text-btn style2  no-tooltip" > Respect Her Choices</button>
    </div>


    <div class="modal-wrapper-main">
        <div class="modal-wrapper">
            <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel">Approach Her</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                            <ul class="list-simple">
                                <li>
                                Make sure to talk to the woman when she is alone.
                                </li>
                                <li>
                                Tell her that you are worried about her and that what is happening is not her fault.
                                </li>
                                <li>
                                Understand that a victim may not open up when first approached with an offer to help, but they do remember you offered.
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
                    <source src="./assets/videos/s41b.mp4" type="video/mp4"></source>
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
                            <!-- <button class="next-prev-btns next no-tooltip" onclick="playSlide42();">Next</button> -->

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide41c() {
    videoContainer.innerHTML = `

    <div class="text-btn-main">
        <button class="text-btn style2 no-tooltip visited" > Observe Changed<br />  Behavior</button>
        <button class="text-btn style2 no-tooltip visited"> Approach Her </button>
        <button class="text-btn style2 no-tooltip visited" > Be Non-Judgemental</button>
        <button id="btn" class="text-btn style2 no-tooltip" data-toggle="modal" data-target="#modal" onclick="playSlide41d()" > Respect Her Choices</button>
    </div>


    <div class="modal-wrapper-main">
        <div class="modal-wrapper">
            <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel">Be Non-Judgmental</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                            <ul class="list-simple">
                                <li>
                                Reinforce that the abuse is not her fault.
                                </li>
                                <li>
                                Tell her that abuse is the partner's problem and responsibility, but refrain from "bad-mouthing" him.
                                </li>
                                <li>
                                Don't tell her that the abuser is a jerk, that you never liked him, etc. That can also make her feel guilty for talking bad about her partner.
                                </li>
                                <li>
                                Focus on the partner's negative behavior in your comments and not on your negative opinion of the partner's personality.
                                </li>
                                <li>
                                If you are concerned about her safety, express your concern without judgment by simple saying, "The situation sounds dangerous and I'm concerned about your safety.
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
                    <source src="./assets/videos/s41c.mp4" type="video/mp4"></source>
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
                            <!-- <button class="next-prev-btns next no-tooltip" onclick="playSlide42();">Next</button> -->

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide41d() {
    videoContainer.innerHTML = `

    <div class="text-btn-main">
        <button class="text-btn style2 no-tooltip visited" > Observe Changed<br />  Behavior</button>
        <button class="text-btn style2 no-tooltip visited"> Approach Her </button>
        <button class="text-btn style2 no-tooltip visited" > Be Non-Judgemental</button>
        <button id="btn" class="text-btn style2 no-tooltip visited" data-toggle="modal" data-target="#modal"> Respect Her Choices</button>
    </div>


    <div class="modal-wrapper-main">
        <div class="modal-wrapper">
            <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel">Respect Her Choices</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                            <ul class="list-simple">
                                <li>
                                Remember that there are risks attached every decision an abuse victim makes.
                                </li>
                                <li>
                                If you truly want to be helpful, be patient and respectful of a person's decisions, even if you don't agree with them.
                                </li>
                                <li>
                                Avoid telling her that she needs to leave. She already knows that she needs to leave but there may be many reasons why she feels she cannot leave him including financial reasons, shared custody of children and cultural factors.
                                </li>
                                <li>
                                Validate her feelings. It is common for victims to have conflicting feelings-love and fear, guilt and anger, hope and despair. Let them know that their feelings are normal and reasonable.
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
                    <source src="./assets/videos/s41d.mp4" type="video/mp4"></source>
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
    videoContainer.innerHTML = `


    <div class="text-btn-main">
    <button id="btn" class="text-btn no-tooltip" data-toggle="modal" data-target="#modal" onclick="playSlide42a()"> Approaching the<br />  Abuser</button>
    <button class="text-btn no-tooltip" > Assess for Safety </button>
    <button class="text-btn no-tooltip" > Personal Safety First</button>
</div>


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
                            <!-- <button class="next-prev-btns next no-tooltip" onclick="playSlide43();">Next</button> -->

                        </div>
                    </div>
                </div>
            </div>
    `
    localStorage.setItem("slide", "playSlide42()");
}

function playSlide42a() {
    videoContainer.innerHTML = `

    <div class="text-btn-main">
    <button class="text-btn no-tooltip visited"> Approaching the<br />  Abuser</button>
    <button id="btn" class="text-btn no-tooltip"  data-toggle="modal" data-target="#modal" onclick="playSlide42b()" > Assess for Safety </button>
    <button class="text-btn no-tooltip" > Personal Safety First</button>
</div>


    <div class="modal-wrapper-main">
        <div class="modal-wrapper">
            <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel">Approaching the Abuser</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                            <p class="modal-para">Do not approach the abuser unless you have a special relationship with him. It may not only put you in a dangerous situation but also increase the harm to his partner if he thinks she has been telling others about his abusive behaviour. </p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s42a.mp4" type="video/mp4"></source>
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
                            <!-- <button class="next-prev-btns next no-tooltip" onclick="playSlide42();">Next</button> -->

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide42b() {
    videoContainer.innerHTML = `

    <div class="text-btn-main">
    <button class="text-btn no-tooltip visited"> Approaching the<br />  Abuser</button>
    <button class="text-btn no-tooltip visited" > Assess for Safety </button>
    <button id="btn" class="text-btn no-tooltip"  data-toggle="modal" data-target="#modal" onclick="playSlide42c()" > Personal Safety First</button>
</div>


    <div class="modal-wrapper-main">
        <div class="modal-wrapper">
            <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel">Assess for Safety</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                            <p class="modal-para">Assess for safety if you see someone in trouble by asking yourself if you can help safely. It might be better to intervene as a group rather than on your own. Be polite and remain calm. Don't aggravate the situation by confronting the abuser.</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s42b.mp4" type="video/mp4"></source>
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
                            <!-- <button class="next-prev-btns next no-tooltip" onclick="playSlide42();">Next</button> -->

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide42c() {
    videoContainer.innerHTML = `

    <div class="text-btn-main">
    <button class="text-btn no-tooltip visited"> Approaching the<br />  Abuser</button>
    <button class="text-btn no-tooltip visited" > Assess for Safety </button>
    <button id="btn" class="text-btn no-tooltip visited"  data-toggle="modal" data-target="#modal" > Personal Safety First</button>
</div>


    <div class="modal-wrapper-main">
        <div class="modal-wrapper">
            <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel">Personal Safety First</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                            <p class="modal-para">Remember, your personal safety is a priority -never put yourself at risk, If there is the threat of violence or you are outnumbered just walk away. Report it when it's safe to do so -it's never too late to act.</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s42c.mp4" type="video/mp4"></source>
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
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide43();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
}

function playSlide43() {
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
    localStorage.setItem("slide", "playSlide43()");
}

function playSlide44() {
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
    localStorage.setItem("slide", "playSlide44()");
}

function playSlide45() {
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
    localStorage.setItem("slide", "playSlide45()");
}

function playSlide46() {
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
    localStorage.setItem("slide", "playSlide46()");
}

function playSlide47() {
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
    localStorage.setItem("slide", "playSlide47()");
}

function playSlide48() {
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
    localStorage.setItem("slide", "playSlide48()");
}

function playSlide49() {
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
    localStorage.setItem("slide", "playSlide49()");
}

function playSlide50() {
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
    localStorage.setItem("slide", "playSlide50()");
}

function playSlide51() {
    videoContainer.innerHTML = `
                <video class="video" id="video" preload="metadata" autoplay
                    onloadedmetadata="initializeVideo()" onplay="updatePlayButton()" 
                    onpause="updatePlayButton()" ontimeupdate="updateProgress();" onvolumechange="updateVolumeIcon()">
                    <source src="./assets/videos/s51.mp4" type="video/mp4"></source>
                    <a href="#"> <img src="icons8-pdf-50.png" height = 80px/> </a>
                </video>

                <div class="pdf-wrapper-top">
                <div class="pdf-wrapper">
               <div class="pdf-link"> <a href="https://firebasestorage.googleapis.com/v0/b/e-module-pdfs.appspot.com/o/Chechlist%2FNFF%202022_Handout%20-%20Checklist_English_FV.pdf?alt=media&token=f1e64aa0-6431-43e5-9ed2-880c10c5ec81" target="_blank""><img src="Checklist PDF Logo/NFF 2022 Handout Checklist_English_FV.png"  /> </a></div>
               <div class="pdf-link"> <a href="https://firebasestorage.googleapis.com/v0/b/e-module-pdfs.appspot.com/o/Chechlist%2FNFF%202022_Handout%20-%20Checklist_French_FV.pdf?alt=media&token=37385635-a5d1-4a2c-9c0a-b62a234e8cf6"" target="_blank"><img src="Checklist PDF Logo/NFF 2022 Handout Checklist_French_FV.png" /> </a></div>
               <div class="pdf-link"> <a href="https://firebasestorage.googleapis.com/v0/b/e-module-pdfs.appspot.com/o/Chechlist%2FNFF%202022_Handout%20-%20Checklist_Hindi_FV.pdf?alt=media&token=c5eea240-06fe-4cc7-b047-58218c78aecb"" target="_blank"><img src="Checklist PDF Logo/NFF 2022 Handout Checklist_Hindi_FV.png" /> </a></div>
               <div class="pdf-link"> <a href="https://firebasestorage.googleapis.com/v0/b/e-module-pdfs.appspot.com/o/Chechlist%2FNFF%202022_Handout%20-%20Checklist_Korean_FV.pdf?alt=media&token=5c770a91-f9df-489d-9c54-0b74b4bfebb9"" target="_blank"><img src="Checklist PDF Logo/NFF 2022 Handout Checklist_Korean_FV.png" /> </a></div>
               <div class="pdf-link"> <a href="https://firebasestorage.googleapis.com/v0/b/e-module-pdfs.appspot.com/o/Chechlist%2FNFF%202022_Handout%20-%20Checklist_Chinese_FV.pdf?alt=media&token=5b39190e-d194-4857-9930-823b94cdf1c3"" target="_blank"> <img src="Checklist PDF Logo/NFF 2022 Handout Checklist_Chinese_FV.png" /> </a></div>
               <div class="pdf-link"> <a href="https://firebasestorage.googleapis.com/v0/b/e-module-pdfs.appspot.com/o/Chechlist%2FNFF%202022_Handout%20-%20Checklist_Vietnamese_FV.pdf?alt=media&token=a9bdae32-b562-4301-b2b3-bde5b33074da"" target="_blank"><img src="Checklist PDF Logo/NFF 2022_Handout Checklist_Vietnamese_FV_00102.png" /> </a></div>
                </div>
                </div>

                <div class="pdf-wrapper-top bottom">
                <div class="pdf-wrapper">
            
                 <div class="pdf-link"><a href="https://firebasestorage.googleapis.com/v0/b/e-module-pdfs.appspot.com/o/Recognizing%20Abuse%2F1.%20Recognizing%20Abuse_French_FV.pdf?alt=media&token=ea25b95f-0516-4978-99ec-32c50bf31db5"" target="_blank"><img src="Recongnizing Abuse/Recognizing Abuse_French_FV_00231.png" /> </a></div>
                 <div class="pdf-link"><a href="https://firebasestorage.googleapis.com/v0/b/e-module-pdfs.appspot.com/o/Recognizing%20Abuse%2F5.%20Recognizing%20Abuse_Hindi_FV.pdf?alt=media&token=efbca883-259d-4b63-937a-f70de58c2566"" target="_blank"><img src="Recongnizing Abuse/Recognizing Abuse_Hindi_FV_00231.png" /> </a></div>
                 <div class="pdf-link"><a href="https://firebasestorage.googleapis.com/v0/b/e-module-pdfs.appspot.com/o/Recognizing%20Abuse%2F3.%20Recognizing%20Abuse_Korean_FV.pdf?alt=media&token=9a11e4c1-17c2-4f89-b280-eb16fc87c13e"" target="_blank"><img src="Recongnizing Abuse/Recognizing Abuse_Korean_FV_00231.png" /> </a></div>
                 <div class="pdf-link"><a href="https://firebasestorage.googleapis.com/v0/b/e-module-pdfs.appspot.com/o/Recognizing%20Abuse%2F2.%20Recognizing%20Abuse_Chinese_FV.pdf?alt=media&token=6c220cb4-c8d8-46a0-ab09-102e52c10cc3"" target="_blank"><img src="Recongnizing Abuse/Recognizing Abuse_Chinese_FV_00231.png" /> </a></div>
                 <div class="pdf-link"><a href="https://firebasestorage.googleapis.com/v0/b/e-module-pdfs.appspot.com/o/Recognizing%20Abuse%2F4.%20Recognizing%20Abuse_Vietnamese_FV.pdf?alt=media&token=4ab2942f-77bd-40f3-899b-93ae9cfac6ad"" target="_blank"><img src="Recongnizing Abuse/Recognizing Abuse_Vietnamese_FV_00231.png" /> </a></div>

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

                            <button class="next-prev-btns prev no-tooltip" onclick="playSlide50();">Prev</button>
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide52();">Next</button>

                        </div>
                    </div>
                </div>
            </div>
    `
    localStorage.setItem("slide", "playSlide51()");
}

function playSlide52() {
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
    localStorage.setItem("slide", "playSlide52()");
}

function playSlide53() {
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
    localStorage.setItem("slide", "playSlide53()");
}

function playSlide54() {
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
    localStorage.setItem("slide", "playSlide54()");
}

function playSlide55() {
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
                            <button class="next-prev-btns next no-tooltip" onclick="playSlide1();">Restart</button>

                        </div>
                    </div>
                </div>
            </div>
    `
    localStorage.setItem("slide", "playSlide55()");
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

    seek.value = Math.ceil(video.currentTime);
    progressBar.value = Math.ceil(video.currentTime);
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