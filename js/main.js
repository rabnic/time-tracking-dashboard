let activityData = [
  {
    "title": "Work",
    "id": "work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "id": "play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "id": "study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "id": "exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "id": "social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "id": "self-care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

let user = {
    name: "Jeremy Robson",
    imageUrl: "./images/image-jeremy.png",
}

const mainContainer = document.getElementById("main-container");
const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');

let defaultTimeframe = "daily";

function renderData(timeframe) {
    mainContainer.innerHTML =
        `
        <div class="user-card">
                <section class="user-info-container">
                <div class="user-image">
                    <img style="width: 78px;height:78px" src="${user.imageUrl}" alt="" width="78" height="78">
                </div>
                <div class="user-info">
                    <span>Report for</span><br>
                    <h1>${user.name}</h1>
                </div>
                </section>
                <section class="frequency-container">
                <ul>
                    <li id="daily" class="frequency" onClick="renderData('daily')">Daily</li>
                    <li id="weekly" class="frequency active" onClick="renderData('weekly')">Weekly</li>
                    <li id="monthly" class="frequency" onClick="renderData('monthly')">Monthly</li>
                </ul>
                </section>
            </div>
        `;

    activityData.forEach(obj => {
    mainContainer.innerHTML +=
        `
            <div class="activity-card" id="${obj.id}">
                    <div class="box">
                    <div class="title">
                        <div>
                        <h2>${obj.title}</h2>
                        </div>
                        <div>
                        <img src="./images/icon-ellipsis.svg" alt="">
                        </div>
                    </div>
                    <div class="time">
                        <h3>${obj.timeframes[timeframe].current}hrs</h3>
                        <span>Last Week - ${obj.timeframes[timeframe].previous}hrs</span>
                    </div>
                    </div>
            </div>
        `;
    });
}

renderData(defaultTimeframe);


