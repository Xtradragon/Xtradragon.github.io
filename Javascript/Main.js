// JavaScript Document

var interchangeStations = 
[
  { name: "Jurong East", lines: ["NS", "EW"] }, 			// 0
  { name: "Woodlands", lines: ["NS", "TE"] }, 				// 1
  { name: "Bishan", lines: ["NS", "CC"] }, 					// 2
  { name: "Dhoby Ghaut", lines: ["NS", "NE", "CC"] }, 		// 3
  { name: "City Hall", lines: ["NS", "EW"] }, 				// 4
  { name: "Raffles Place", lines: ["NS", "EW"] }, 			// 5
  { name: "Newton", lines: ["NS", "DT"] }, 					// 6
  { name: "Marina Bay", lines: ["NS", "TE", "CC"] }, 		// 7
  { name: "Outram Park", lines: ["EW", "NE", "TE"] }, 		// 8
  { name: "HarbourFront", lines: ["NE", "CC"] }, 			// 9
  { name: "Paya Lebar", lines: ["EW", "CC"] }, 				// 10
  { name: "Buona Vista", lines: ["EW", "CC"] }, 			// 11
  { name: "Chinatown", lines: ["NE", "DT"] }, 				// 12
  { name: "Serangoon", lines: ["NE", "CC"] }, 				// 13
  { name: "Little India", lines: ["NE", "DT"] }, 			// 14
  { name: "Botanic Gardens", lines: ["CC", "DT"] }, 		// 15
  { name: "MacPherson", lines: ["CC", "DT"] }, 				// 16
  { name: "Bayfront", lines: ["CC", "DT"] }, 				// 17
  { name: "Promenade", lines: ["CC", "DT"] }, 				// 18
  { name: "Stevens", lines: ["DT", "TE"] }, 				// 19
  { name: "Caldecott", lines: ["CC", "TE"] }, 				// 20
  { name: "Expo", lines: ["DT"] }, 							// 21
  { name: "Tampines", lines: ["EW", "DT"] }, 				// 22
  { name: "Bugis", lines: ["EW", "DT"] }, 					// 23
  { name: "Orchard", lines: ["NS", "TE"] } 					// 24
];


var stationTransitions = 
{
  "Jurong East"://Checked
	{
		"NS": 
		{
		  "Forward": 
			{
				"station": 1,    // Travelling to Woodlands
				"line": 0,
				"Feedback": "Travelling to Woodlands"
		  	},
		  "Backward": 
			{
				"station": 0,    // Stays at Jurong East
				"line": 0,
				"Feedback": "Still at Jurong East time wasted"
		  	}
		},
    	"EW": 
		{
		  "Forward": 
			{
				"station": 11, // Travelling to Buona Vista
				"line": 0,
				"Feedback": "Travelling to Buona Vista" 
			},
		  "Backward": 
			{
				"station": 0, // Need to figure how to add timer so it will add 5min to the travel????
				"line": 1,
				"Feedback": "Still at Jurong East time wasted"
     		 }
    	}
  	},
  "Woodlands": //Checked
	{
		"NS": 
		{
		  "Forward": 
			{
				"station": 2,    // Travelling to Bishan
				"line": 0,
				"Feedback": "Travelling to Bishan"   
		  	},
		  "Backward": 
			{
				"station": 0,    // Travelling to Jurong East
				"line": 0,
				"Feedback": "Travelling to Jurong East"   
			}
		},
    	"TE": 
		{
		  "Forward": 
			{
				"station": 20, // Travelling to Caldecott
				"line": 1,
				"Feedback": "Travelling to Caldecott"   
		  	},
		  "Backward": 
			{
				"station": 1,
				"line": 0,
				"Feedback": "Still at Woodlands time wasted"
		 	}
    	}
  	},
  "Bishan": //Checked
	{
		"NS": 
		{
		  "Forward": 
			{
				"station": 6,    // Travelling to Newton
				"line": 0,
				"Feedback": "Travelling to Newton"
		  	},
		  "Backward": 
			{
				"station": 1,    // Travelling to Woodlands
				"line": 0,
				"Feedback": "Travelling to Woodlands"
		  	}
		},
    	"CC": 
		{
		  "Forward": 
			{
				"station": 13, // Travelling to Serangoon
				"line": 1,
				"Feedback": "Travelling to Serangoon" 
			},
		  "Backward": 
			{
				"station": 20, // Travelling to Caldecott
				"line": 0,
				"Feedback": "// Travelling to Caldecott"
     		 }
    	}
  	},
  "Dhoby Ghaut": //Checked 
	{
		"NS": 
		{
		  "Forward": 
			{
				"station": 4,    // Travelling to City Hall
				"line": 0,
				"Feedback": "Travelling to City Hall"
		  	},
		  "Backward": 
			{
				"station": 24,    // Travelling to Orchard
				"line": 0,
				"Feedback": "Travelling to Orchard"
		  	}
		},
    	"NE": 
		{
		  "Forward": 
			{
				"station": 12, // Travelling to Chinatown
				"line": 0,
				"Feedback": "Travelling to Chinatown" 
			},
		  "Backward": 
			{
				"station": 13, // Travelling to Serangoon
				"line": 0,
				"Feedback": "// Travelling to Serangoon"
     		 }
    	},
		"CC": 
		{
		  "Forward": 
			{
				"station": 18, // Travelling to Promenade
				"line": 0,
				"Feedback": "Travelling to Promenade" 
			},
		  "Backward": 
			{
				"station": 3, // Still at Dhoby Ghaut time wasted
				"line": 2,
				"Feedback": "Still at Dhoby Ghaut time wasted"
     		 }
    	}
  	},
  "City Hall": //Checked 
	{
		"NS": 
			{
			  "Forward": 
				{
					"station": 5,
					"line": 0,
					"Feedback": "Travelling to Raffles Place"
				},
			  "Backward": 
				{
					"station": 3,
					"line": 0,
					"Feedback": "Travelling to Dhoby Ghaut"
			  	}
			},
    	"EW": 
			{
      			"Forward": 
				{
					"station": 23,
					"line": 0,
					"Feedback": "Travelling to Bugis"
      			},
      			"Backward": 
				{
					"station": 5,
					"line": 1,
					"Feedback": "Travelling to Raffles Place"
      			}
    		}
  	},
  "Raffles Place": //Checked 
	{
		"NS": 
			{
			  "Forward": 
				{
					"station": 7,
					"line": 0,
					"Feedback": "Travelling to Marina Bay"
				},
			  "Backward": 
				{
					"station": 4,
					"line": 0,
					"Feedback": "Travelling to City Hall"
			  	}
			},
    	"EW": 
			{
      			"Forward": 
				{
					"station": 4,
					"line": 1,
					"Feedback": "Travelling to City Hall"
      			},
      			"Backward": 
				{
					"station": 8,
					"line": 0,
					"Feedback": "Travelling to Outram Park"
      			}
    		}
  	},
  "Newton": //Checked 
	{
    	"NS": 
		{
		  "Forward": 
			{
				"station": 24,   // Orchard
				"line": 0,
				"Feedback": "Travelling to Orchard"
      		},
		  "Backward": 
			{
				"station": 2,   // Bishan
				"line": 0,
				"Feedback": "Travelling to Bishan"
		  	}
    },
		"DT": 
		{
		  "Forward": 
			{
				"station": 14,  // Little India
				"line": 1,
				"Feedback": "Travelling to Little India"
		  	},
		  "Backward": 
			{
				"station": 19,   // Stevens
				"line": 0,
				"Feedback": "Travelling to Stevens"
		  	}
		}
  },
  "Marina Bay": //Checked 
	{
    "NS": 
		{
      "Forward": 
			{
        "station": 7,   // Marina Bay
        "line": 0,
        "Feedback": "Still at Marina Bay time wasted"
      },
      "Backward": 
			{
        "station": 5,   // Raffles Place
        "line": 0,
        "Feedback": "Travelling to Raffles Place"
      }
    },
    "TE": 
		{
      "Forward": 
			{
        "station": 21,  // Expo
        "line": 0,
        "Feedback": "Travelling to Expo"
      },
      "Backward": 
			{
        "station": 8,   //Outram Park
        "line": 2,
        "Feedback": "Travelling to Outram Park"
      }
    },
	"CC": {
      "Forward": {
        "station": 17,  // Bayfront
        "line": 0,
        "Feedback": "Travelling to Bayfront"
      },
      "Backward": {
        "station": 9,   // HarbourFront
        "line": 1,
        "Feedback": "Travelling to HarbourFront"
      }
    }
  },
  "Outram Park": //Checked 
	{
    "EW": {
      "Forward": {
        "station": 5,  // Raffles Place
        "line": 1,
        "Feedback": "Travelling to Raffles Place"
      },
      "Backward": {
        "station": 11,   // Buona Vista
        "line": 0,
        "Feedback": "Travelling to Buona Vista"
      }
    },
    "NE": {
      "Forward": {
        "station": 9,   // HarbourFront
        "line": 0,
        "Feedback": "Travelling to HarbourFront"
      },
      "Backward": {
        "station": 12,   // Chinatown
        "line": 0,
        "Feedback": "Travelling to Chinatown"
      }
    },
    "TE": {
      "Forward": {
        "station": 7,  // Marina Bay
        "line": 1,
        "Feedback": "Travelling to Marina Bay"
      },
      "Backward": {
        "station": 24,   // Orchard
        "line": 1,
        "Feedback": "Travelling to Orchard"
      }
    }
  },
  "HarbourFront": //Checked  
	{
    "NE": {
      "Forward": {
        "station": 9,  // HarbourFront
        "line": 0,
        "Feedback": "Still at HarbourFront time wasted"
      },
      "Backward": {
        "station": 8,   // Outram Park
        "line": 1,
        "Feedback": "Travelling to Outram Park"
      }
    },
    "CC": {
      "Forward": {
        "station": 7,  // Marina Bay
        "line": 2,
        "Feedback": "Travelling to Marina Bay"
      },
      "Backward": {
        "station": 11,   // Buona Vista
        "line": 1,
        "Feedback": "Travelling to Buona Vista"
      }
    }
  },
  "Paya Lebar": //Checked 
	{
    "EW": {
      "Forward": {
        "station": 22,  // Tampines
        "line": 0,
        "Feedback": "Travelling to Tampines"
      },
      "Backward": {
        "station": 23,   // Bugis
        "line": 0,
        "Feedback": "Travelling to Bugis"
      }
    },
    "CC": {
      "Forward": {
        "station": 16,  // MacPherson
        "line": 0,
        "Feedback": "Travelling to MacPherson"
      },
      "Backward": {
        "station": 18,   // Promenade
        "line": 0,
        "Feedback": "Travelling to Promenade"
      }
    }
  },
  "Buona Vista": //Checked  
	{
    "EW": {
      "Forward": {
        "station": 8,  // Outram Park
        "line": 0,
        "Feedback": "Travelling to Outram Park"
      },
      "Backward": {
        "station": 0,   // Jurong East
        "line": 1,
        "Feedback": "Travelling to Jurong East"
      }
    },
    "CC": {
      "Forward": {
        "station": 9,  // HarbourFront
        "line": 1,
        "Feedback": "Travelling to HarbourFront"
      },
      "Backward": {
        "station": 15,  // Botanic Gardens
        "line": 0,
        "Feedback": "Travelling to Botanic Gardens"
      }
    }
  },
  "Chinatown": //Checked  
	{
    "NE": {
      "Forward": {
        "station": 8,  // Outram Park
        "line": 1,
        "Feedback": "Travelling to Outram Park"
      },
      "Backward": {
        "station": 3,   // Dhoby Ghaut
        "line": 1,
        "Feedback": "Travelling to Dhoby Ghaut"
      }
    },
    "DT": {
	  "Forward": {
        "station": 16,   // MacPherson
        "line": 1,
        "Feedback": "Travelling to MacPherson"
	  },
      "Backward": {
        "station": 17,  // Bayfront
        "line": 1,
        "Feedback": "Travelling to Bayfront"
      }
    }
  },
  "Serangoon": //Checked  
	{
    "NE": {
      "Forward": {
        "station": 13,  // Serangoon
        "line": 0,
        "Feedback": "Still at Serangoon time wasted"
      },
      "Backward": {
        "station": 3,  // Dhoby Ghaut
        "line": 1,
        "Feedback": "Travelling to Dhoby Ghaut"
      }
    },
    "CC": {
      "Forward": {
        "station": 2,   // Bishan
        "line": 1,
        "Feedback": "Travelling to Bishan"
      },
	  "Backward": {
        "station": 16,  // MacPherson
        "line": 0,
        "Feedback": "Travelling to MacPherson"
      },
    }
  },
  "Little India": //Checked 
	{
    "NE": {
      "Forward": {
        "station": 13,  // Serangoon
        "line": 0,
        "Feedback": "Travelling to Serangoon"
      },
      "Backward": {
        "station": 3,  // Dhoby Ghaut
        "line": 1,
        "Feedback": "Travelling to Dhoby Ghaut"
      }
    },
    "DT": {
      "Forward": {
        "station": 23,  // Bugis
        "line": 1,
        "Feedback": "Travelling to Bugis"
      },
      "Backward": {
        "station": 6,  // Newton
        "line": 1,
        "Feedback": "Travelling to Newton"
      }
    }
  },
  "Botanic Gardens": //Checked  
	{
    "CC": {
      "Forward": {
        "station": 11,  // Buona Vista
        "line": 1,
        "Feedback": "Travelling to Buona Vista"
      },
      "Backward": {
        "station": 20,  // Caldecott
        "line": 0,
        "Feedback": "Travelling to Caldecott"
      }
    },
    "DT": {
      "Forward": {
        "station": 19,  // Stevens
        "line": 0,
        "Feedback": "Travelling to Stevens"
      },
      "Backward": {
        "station": 15,  // Botanic Gardens
        "line": 0,
        "Feedback": "Still at Botanic Gardens time wasted"
      }
    }
  },
  "MacPherson": //Checked 
	{
    "CC": {
      "Forward": {
        "station": 13,  // Serangoon
        "line": 1,
        "Feedback": "Travelling to Serangoon"
      },
      "Backward": {
        "station": 10,  // Paya Lebar
        "line": 1,
        "Feedback": "Travelling to Paya Lebar"
      }
    },
    "DT": {
      "Forward": {
        "station": 22,  // Tampines
        "line": 1,
        "Feedback": "Travelling to Tampines"
      },
      "Backward": {
        "station": 12,  // Chinatown
        "line": 1,
        "Feedback": "Travelling to Chinatown"
      }
    }
  },
  "Bayfront": //Checked 
	{
    "CC": {
      "Forward": {
        "station": 18,  // Promenade
        "line": 0,
        "Feedback": "Travelling to Promenade"
      },
      "Backward": {
        "station": 7,  // Marina Bay
        "line": 2,
        "Feedback": "Travelling to Marina Bay"
      }
    },
    "DT": {
      "Forward": {
        "station": 12,  // Chinatown
        "line": 1,
        "Feedback": "Travelling to Chinatown"
      },
      "Backward": {
        "station": 18,  // Promenade
        "line": 1,
        "Feedback": "Travelling to Promenade"
      }
    }
  },
  "Promenade": //Checked  
	{
    "CC": {
      "Forward": {
        "station": 10,  // Paya Lebar
        "line": 1,
        "Feedback": "Travelling to Paya Lebar"
      },
      "Backward": {
        "station": 17,  // Bayfront
        "line": 0,
        "Feedback": "Travelling to Bayfront"
      }
    },
    "DT": {
      "Forward": {
        "station": 17,  // Bayfront
        "line": 1,
        "Feedback": "Travelling to Bayfront"
      },
      "Backward": {
        "station": 23,  // Bugis
        "line": 1,
        "Feedback": "Travelling to Bugis"
      }
    }
  },
  "Stevens": //Checked 
	{
    "DT": { 
      "Forward": {
        "station": 6,  // Newton
        "line": 1,
        "Feedback": "Travelling to Newton"
      },
      "Backward": {
        "station": 15,  // Botanic Gardens
        "line": 1,
        "Feedback": "Travelling to Botanic Gardens"
      }
    },
    "TE": {
      "Forward": {
        "station": 24,   // Orchard
        "line": 1,
        "Feedback": "Travelling to Orchard"
      },
      "Backward": {
        "station": 20,  // Caldecott
        "line": 1,
        "Feedback": "Travelling to Caldecott"
      }
    }
  },
  "Caldecott": 
	{
    "CC": {
      "Forward": {
        "station": 15,  // Botanic Gardens
        "line": 0,
        "Feedback": "Travelling to Botanic Gardens"
      },
      "Backward": {
        "station": 2,  // Bishan
        "line": 1,
        "Feedback": "Travelling to Bishan"
      }
    },
    "TE": {
      "Forward": {
        "station": 19,   // Stevens
        "line": 1,
        "Feedback": "Travelling to Stevens"
      },
      "Backward": {
        "station": 1,  // Woodlands
        "line": 1,
        "Feedback": "Travelling to Woodlands"
      }
    }
  },
  "Expo": 
	{
    "DT": {
      "Forward": {
        "station": 7,  // Marina Bay
        "line": 1,
        "Feedback": "Travelling to Marina Bay"
      },
      "Backward": {
        "station": 2,  // Tampines
        "line": 1,
        "Feedback": "Travelling to Tampines"
      }
    }
  },
  "Tampines": 
	{
    "EW": {
      "Forward": {
        "station": 22,  // Tampines
        "line": 0,
        "Feedback": "Still at Tampines time wasted"
      },
      "Backward": {
        "station": 10,  // Paya Lebar
        "line": 0,
        "Feedback": "Travelling to Paya Lebar"
      }
    },
    "DT": {
      "Forward": {
        "station": 21,  // Expo
        "line": 1,
        "Feedback": "Travelling to Expo"
      },
      "Backward": {
        "station": 16,  // MacPherson
        "line": 1,
        "Feedback": "Travelling to MacPherson"
      }
    }
  },
  "Bugis": 
	{
    "EW": {
      "Forward": {
        "station": 10,   // Paya Lebar
        "line": 0,
        "Feedback": "Travelling to Paya Lebar"
      },
      "Backward": {
        "station": 4,  // City Hall
        "line": 1,
        "Feedback": "Travelling to City Hall"
      }
    },
    "DT": {
      "Forward": {
        "station": 18,  // Promenade
        "line": 1,
        "Feedback": "Travelling to Promenade"
      },
      "Backward": {
        "station": 14,  // Little India
        "line": 1,
        "Feedback": "Travelling to Little India"
      }
    }
  },
  "Orchard": 
	{
    "NS": {
      "Forward": {
        "station": 3,   // Dhoby Ghaut
        "line": 0,
        "Feedback": "Travelling to Dhoby Ghaut"
      },
      "Backward": {
        "station": 6,  // Newton
        "line": 0,
        "Feedback": "Travelling to Newton"
      }
    },
    "TE": {
      "Forward": {
        "station": 8,  // Outram Park
        "line": 2,
        "Feedback": "Travelling to Outram Park"
      },
      "Backward": {
        "station": 19,  // Stevens
        "line": 1,
        "Feedback": "Travelling to Stevens"
      }
    }
  }
}



var Game_Running = false;
var Station, Current_Location,
    Current_Direction_Facing,
    Current_Line_Index, Current_Line,
    Destination_Station;



var canvas = document.getElementById('Mini_Game_Canvas');
var ctx = canvas.getContext('2d');
var Background_Image = new Image(); 
var Easy_Card_Image = new Image();
var Normal_Card_Image = new Image();
var Rush_Hour_Card_Image = new Image();
var Train_Station_Image = new Image();
var Phone_Background_Image = new Image();
var Location_Btn_Image = new Image();
var Square_Btn_Image = new Image();
var Start_Travel_Btn_Image = new Image();
var Forward_Arrow_Image = new Image();
var Backward_Arrow_Image = new Image();
var Map_Image = new Image();

Background_Image.src = 'Images/Train_Station_Background.png';
Easy_Card_Image.src = 'Images/Easy_Card.png';
Normal_Card_Image.src = 'Images/Normal_Card.png';
Rush_Hour_Card_Image.src = 'Images/Rush_Hour_Card.png';
Train_Station_Image.src = 'Images/Train_Station.png';
Phone_Background_Image.src = 'Images/Phone_Background.png';
Location_Btn_Image.src = 'Images/Location_Btn_Image.png';
Square_Btn_Image.src = 'Images/Square_Btn_Image.png';
Start_Travel_Btn_Image.src = 'Images/Start_Travel_Btn_Image.png';
Forward_Arrow_Image.src = 'Images/Forward_Arrow_Image.png';
Backward_Arrow_Image.src = 'Images/Backward_Arrow_Image.png';
Map_Image.src = 'Images/Map_Image.png';

//-----------------------------------------------------------------------
var Default_Train = new Image();
Default_Train.src = 'Images/Default_Train.png';

var NS_Line = new Image();
NS_Line.src = 'Images/NS_Line.png';

var EW_Line = new Image();
EW_Line.src = 'Images/EW_Line.png';

var NE_Line = new Image();
NE_Line.src = 'Images/NE_Line.png';

var CC_Line = new Image();
CC_Line.src = 'Images/CC_Line.png';

var DT_Line = new Image();
DT_Line.src = 'Images/DT_Line.png';

var TE_Line = new Image();
TE_Line.src = 'Images/TE_Line.png';

var Line_Images =
{
    NS: NS_Line,
    EW: EW_Line,
    NE: NE_Line,
    CC: CC_Line,
    DT: DT_Line,
    TE: TE_Line
};

var trainX = (canvas.width / 2) - 500;
var lineX = (canvas.width / 2) - 478;
var targetX = trainX - 1800; // Move 100px to the left
var speed = 5; // Pixels per frame

//-----------------------------------------------------------------------

Background_Image.onload = function() {
	ctx.filter = 'blur(5px)';
    ctx.drawImage(Background_Image, 0, 0, canvas.width, canvas.height + 100);
	
	ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	ctx.filter = 'blur(0px)';
	ctx.font      = "bold 100px Roboto, sans-serif";
	ctx.fillStyle = "#fff";
	ctx.textAlign = "left";
	ctx.fillText("The", 50, (canvas.height/2) - 100);
	ctx.fillText("Station", 50, (canvas.height/2));
	ctx.fillText("Simulator", 50, (canvas.height/2) + 100);
	
	ctx.fillStyle = 'rgb(66, 66, 66)';
	ctx.fillRect(canvas.width/2, 0, canvas.width/3 , canvas.height);
	
	ctx.fillStyle = "#fff";
	ctx.textAlign = "left";
	ctx.font      = "bold 40px Roboto, sans-serif";
	ctx.fillText("Play", (canvas.width/2) + 100, (canvas.height/2) - 75);
	ctx.fillRect((canvas.width/2) + 80, (canvas.height/2) - 106.5, 5 , 35);
	ctx.fillText("Instruction", (canvas.width/2) + 100, (canvas.height/2));
	ctx.fillRect((canvas.width/2) + 80, (canvas.height/2) - 32.5, 5 , 35);
	ctx.fillText("Simulator", (canvas.width/2) + 100, (canvas.height/2) + 75);
	ctx.fillRect((canvas.width/2) + 80, (canvas.height/2) + 42.5, 5 , 35);
	
};


function Load_Game_Diffcutly_Page()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.filter = 'blur(5px)';
    ctx.drawImage(Background_Image, 0, 0, canvas.width, canvas.height + 100);
	
	ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.filter = 'blur(0px)';
	ctx.drawImage(Easy_Card_Image, canvas.width/4 - 200, canvas.height/4, canvas.width /4, canvas.height /1.75);
	ctx.drawImage(Normal_Card_Image, canvas.width/4 + 170, canvas.height/4, canvas.width /4, canvas.height /1.75);
	ctx.drawImage(Rush_Hour_Card_Image, canvas.width/4 + 540, canvas.height/4, canvas.width /4, canvas.height /1.75);
}


function Load_Game_Station_Page()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(Background_Image, 0, -50, canvas.width, canvas.height);
    trainX = (canvas.width / 2) - 500;
    lineX = (canvas.width / 2) - 478;

    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.font = "bold 30px Roboto, sans-serif";

    ctx.drawImage(Default_Train, (canvas.width / 2) - 500, canvas.height / 2 + 20, canvas.width + 200, canvas.height / 4);
    ctx.drawImage(Line_Images[Current_Line], (canvas.width / 2) - 478, canvas.height / 2 + 145, canvas.width + 180, canvas.height / 30);

    ctx.drawImage(Train_Station_Image, 0, 0, canvas.width + 10, canvas.height);
    ctx.fillText(Current_Location, (canvas.width / 2), (canvas.height / 2) - 230);

    // Phone Display
    ctx.font = "bold 14px Roboto, sans-serif";
    ctx.textAlign = "left";
    ctx.drawImage(Phone_Background_Image, (canvas.width / 2 + 220), (canvas.height / 2 + 30), canvas.width / 4 - 70, canvas.height / 2);
    
    ctx.drawImage(Location_Btn_Image, (canvas.width / 2 + 253.5), (canvas.height / 2 + 50), canvas.width / 7, canvas.height / 14);

    ctx.fillText("Current Location: ", (canvas.width / 2 + 290), (canvas.height / 2 + 70));
    ctx.fillText(Current_Location, (canvas.width / 2 + 290), (canvas.height / 2 + 90));

    ctx.drawImage(Location_Btn_Image, (canvas.width / 2 + 253.5), (canvas.height / 2 + 110), canvas.width / 7, canvas.height / 14);

    ctx.fillText("Destination: ", (canvas.width / 2 + 290), (canvas.height / 2 + 130));
    ctx.fillText(Destination_Station, (canvas.width / 2 + 290), (canvas.height / 2 + 150));

    ctx.drawImage(Square_Btn_Image, (canvas.width / 2 + 253.5), (canvas.height / 2 + 170), canvas.width / 15, canvas.height / 6.3);
    ctx.fillText("Map", (canvas.width / 2 + 280.5), (canvas.height / 2 + 210));


    ctx.font = "bold 12px Roboto, sans-serif";
    ctx.drawImage(Square_Btn_Image, (canvas.width / 2 + 350.5), (canvas.height / 2 + 170), canvas.width / 15, canvas.height / 13);
    ctx.fillText("Switch", (canvas.width / 2 + 373.5), (canvas.height / 2 + 185));
    ctx.fillText("Direction", (canvas.width / 2 + 367.5), (canvas.height / 2 + 200));

    if (Current_Direction_Facing == "Forward") {
        ctx.drawImage(Forward_Arrow_Image, (canvas.width / 2 + 362.5), (canvas.height / 2 + 200), canvas.width / 20, canvas.height / 26);
    }
    else {
        ctx.drawImage(Backward_Arrow_Image, (canvas.width / 2 + 362.5), (canvas.height / 2 + 200), canvas.width / 20, canvas.height / 26);
    }


    ctx.drawImage(Square_Btn_Image, (canvas.width / 2 + 350.5), (canvas.height / 2 + 230), canvas.width / 15, canvas.height / 13);
    ctx.fillText("Switch Line", (canvas.width / 2 + 358.5), (canvas.height / 2 + 250));



    ctx.font = "bold 14px Roboto, sans-serif";
    ctx.fillText(Current_Line, (canvas.width / 2 + 384.5), (canvas.height / 2 + 270));
    ctx.drawImage(Start_Travel_Btn_Image, (canvas.width / 2 + 253.5), (canvas.height / 2 + 300), canvas.width / 6.9, canvas.height / 15);
    ctx.fillText("Start Travel   >", (canvas.width / 2 + 303), (canvas.height / 2 + 327));
}

function Load_Map_Overlay() {
    ctx.drawImage(Map_Image, 0, 0, canvas.width, canvas.height);
}

var Start_Menu_Page = true;

var Play_Btn_X_Axis = (canvas.width/2) + 100;
var Play_Btn_Y_Axis = (canvas.height/2) - 75;
var Play_Btn_Width = 85;
var Play_Btn_Height = 40;

var Instruction_Btn_X_Axis = (canvas.width/2) + 100;
var Instruction_Btn_Y_Axis = (canvas.height/2);
var Instruction_Btn_Width = 200;
var Instruction_Btn_Height = 40;


var Diffculty_Menu_Page = false;

var Easy_Btn_X_Axis = canvas.width/4 - 200;
var Easy_Btn_Y_Axis = canvas.height/4;
var Easy_Btn_Width = 320;
var Easy_Btn_Height = 410;

var Normal_Btn_X_Axis = canvas.width / 4 + 170;
var Normal_Btn_Y_Axis = canvas.height / 4;
var Normal_Btn_Width = 320;
var Normal_Btn_Height = 410;


var Main_Game_Page = false;

var Switch_Direction_Btn_X_Axis = canvas.width / 2 + 350.5;
var Switch_Direction_Btn_Y_Axis = canvas.height / 2 + 170;
var Switch_Direction_Btn_Width = 85;
var Switch_Direction_Btn_Height = 50;

var Switch_Line_Btn_X_Axis = canvas.width / 2 + 350.5;
var Switch_Line_Btn_Y_Axis = canvas.height / 2 + 230;
var Switch_Line_Btn_Width = 85;
var Switch_Line_Btn_Height = 50;

var Start_Travel_Btn_X_Axis = canvas.width / 2 + 253.5;
var Start_Travel_Btn_Y_Axis = canvas.height / 2 + 300;
var Start_Travel_Btn_Width = 185;
var Start_Travel_Btn_Height = 50;

var Map_Btn_X_Axis = canvas.width / 2 + 253.5;
var Map_Btn_Y_Axis = canvas.height / 2 + 170;
var Map_Btn_Width = 90;
var Map_Btn_Height = 110;


canvas.addEventListener('click', e => 
{
	const rect = canvas.getBoundingClientRect();
	MouseX = e.clientX - rect.left;
	MouseY = e.clientY - rect.top;

    console.log(MouseX);
    console.log(MouseY);

	if(Start_Menu_Page)
	{
		if(MouseX >= Play_Btn_X_Axis && MouseX <= Play_Btn_X_Axis + Play_Btn_Width && MouseY >= Play_Btn_Y_Axis - Play_Btn_Height && MouseY <= Play_Btn_Y_Axis)
		{
			console.log("Play Button Clicked")
            Load_Game_Diffcutly_Page();
            Start_Menu_Page = false;
            Diffculty_Menu_Page = true;
			// Need to fix when switch to another scene this clickable area is disable
		}
		else if(MouseX >= Instruction_Btn_X_Axis && MouseX <= Instruction_Btn_X_Axis + Instruction_Btn_Width && MouseY >= Instruction_Btn_Y_Axis - Instruction_Btn_Height && MouseY <= Instruction_Btn_Y_Axis)
		{
			console.log("Instruction Button Clicked")
			// Need to fix when switch to another scene this clickable area is disable
		}
	}
	
	else if(Diffculty_Menu_Page)
	{
		if(MouseX >= Easy_Btn_X_Axis && MouseX <= Easy_Btn_X_Axis + Easy_Btn_Width && MouseY <= Easy_Btn_Y_Axis + Easy_Btn_Height && MouseY >= Easy_Btn_Y_Axis)
        {
            console.log("Easy Button Clicked")
            Game_Diffculty('Easy');
            Load_Game_Station_Page();
            Diffculty_Menu_Page = false;
            Main_Game_Page = true;
        }

        if (MouseX >= Normal_Btn_X_Axis && MouseX <= Normal_Btn_X_Axis + Normal_Btn_Width && MouseY <= Normal_Btn_Y_Axis + Normal_Btn_Height && MouseY >= Normal_Btn_Y_Axis) {
            console.log("Normal Button Clicked")
            Game_Diffculty('Normal');
            Load_Game_Station_Page();
            Diffculty_Menu_Page = false;
            Main_Game_Page = true;
        }
    }

    else if (Main_Game_Page) {
        if (MouseX >= Switch_Direction_Btn_X_Axis && MouseX <= Switch_Direction_Btn_X_Axis + Switch_Direction_Btn_Width && MouseY <= Switch_Direction_Btn_Y_Axis + Switch_Direction_Btn_Height && MouseY >= Switch_Direction_Btn_Y_Axis) {
            console.log("Switch Button Clicked")
            Switch_Direction();
        }

        if (MouseX >= Switch_Line_Btn_X_Axis && MouseX <= Switch_Line_Btn_X_Axis + Switch_Line_Btn_Width && MouseY <= Switch_Line_Btn_Y_Axis + Switch_Line_Btn_Height && MouseY >= Switch_Line_Btn_Y_Axis) {
            console.log("Switch Line Clicked")
            Switch_Line();
        }

        if (MouseX >= Start_Travel_Btn_X_Axis && MouseX <= Start_Travel_Btn_X_Axis + Start_Travel_Btn_Width && MouseY <= Start_Travel_Btn_Y_Axis + Start_Travel_Btn_Height && MouseY >= Start_Travel_Btn_Y_Axis) {
            console.log("Start Travel Clicked")
            Start_Train();
        }

        if (MouseX >= Map_Btn_X_Axis && MouseX <= Map_Btn_X_Axis + Map_Btn_Width && MouseY <= Map_Btn_Y_Axis + Map_Btn_Height && MouseY >= Map_Btn_Y_Axis) {
            console.log("Map Clicked")
            Load_Map_Overlay();
        }
    }

});

document.getElementById("Game_Play").style.display = "none";

function Game_Diffculty(Diffculty_Value)
{
	var Starting_Station_Rand;
	var Destination_Station_Rand;
	
	switch (Diffculty_Value) {
	case 'Easy':
			Starting_Station_Rand = Math.floor(Math.random() * 2);
			Destination_Station_Rand = 24;
			document.getElementById("Game_Play").style.display = "";
	  break;
	case 'Normal':
			Starting_Station_Rand = Math.floor(Math.random() * interchangeStations.length);
			Destination_Station_Rand = Math.floor(Math.random() * interchangeStations.length);
			while (Destination_Station_Rand == Starting_Station_Rand)
			{
			  Destination_Station_Rand = Math.floor(Math.random() * interchangeStations.length);
			} 
			document.getElementById("Game_Play").style.display = "";
			
	  break;
	case 'Rush_Hour':

	  break;
	}
	
	Station = interchangeStations[Starting_Station_Rand];
	Current_Location = Station.name;
	Current_Direction_Facing = "Forward";
 	Current_Line_Index = 0;
    Current_Line = Station.lines[Current_Line_Index];
    Destination_Station = interchangeStations[Destination_Station_Rand].name;
	
	document.getElementById("Direction_Display").innerText = "Current Direction: " + Current_Direction_Facing;
	document.getElementById("Line_Display").innerText = "Current Line: " + Current_Line;
	document.getElementById("Current_Location_Display").innerText = "Current Station: " + Current_Location;
	document.getElementById("Destination_Location_Display").innerText = "Destination Station: " + Destination_Station;
}

	function Switch_Line()
	{
		Current_Line_Index++;
		Current_Line = Station.lines[Current_Line_Index];
		if(Current_Line_Index > Station.lines.length - 1)
		{
			Current_Line_Index = 0;
		}
		Current_Line = Station.lines[Current_Line_Index];
        document.getElementById("Line_Display").innerText = "Current Line: " + Current_Line;
        Load_Game_Station_Page()
	}

	function Switch_Direction()
	{
		if(Current_Direction_Facing == "Forward")
		{
			Current_Direction_Facing = "Backward"
		}
		else
		{
			Current_Direction_Facing = "Forward"
		}
        document.getElementById("Direction_Display").innerText = "Current Direction: " + Current_Direction_Facing;
        Load_Game_Station_Page()
	}


	function Start_Travel()
    {
       
		var transition = stationTransitions[Current_Location][Current_Line][Current_Direction_Facing];
		Station = interchangeStations[transition.station];
		Current_Location = Station.name;
		Current_Line_Index = transition.line;
		Current_Line = Station.lines[Current_Line_Index];

		document.getElementById("Current_Location_Display").innerText = "Current Station: " + Current_Location;
        document.getElementById("Line_Display").innerText = "Current Line: " + Current_Line;

        Load_Game_Station_Page()

		if(Current_Location == Destination_Station)
		{
			document.getElementById("Display_Screen").innerText = "Yay You Win";
		}
	}

function Start_Train()
{
    trainX -= speed;
    lineX -= speed;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(Background_Image, 0, -50, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.font = "bold 30px Roboto, sans-serif";
    ctx.drawImage(Default_Train, trainX, canvas.height / 2 + 20, canvas.width + 200, canvas.height / 4);
    ctx.drawImage(Line_Images[Current_Line], lineX, canvas.height / 2 + 145, canvas.width + 180, canvas.height / 30);
    ctx.drawImage(Train_Station_Image, 0, 0, canvas.width + 10, canvas.height);
    ctx.fillText(Current_Location, (canvas.width / 2), (canvas.height / 2) - 230);

    console.log("Train X: " + trainX + ", Target X: " + targetX);

    if (trainX > targetX) {
        requestAnimationFrame(Start_Train);
    }
    else
    {
        Start_Travel()
    }
}



/*
while (Game_Running)
{
	//--------------------------------------------------------------------------------------------------------------------------------------------
	// Asking if user want to switch lines
	while(Valid_User_Input == false)
	{
		Line_User_Input = prompt("You currently on " + Current_Location + " On Line " + Current_Line + " Switch or Stay");

		if (Line_User_Input.toLowerCase() == "switch") 
		{
			Current_Line_Index++;
			if(Current_Line_Index > Station.lines.length - 1)
			{
				Current_Line_Index = 0;
			}
			Current_Line = Station.lines[Current_Line_Index];
			alert("Switched to " + Current_Line);
		}
		else if (Line_User_Input.toLowerCase() == "stay") 
		{
			Valid_User_Input = true;
		}
		else 
		{
			alert("Invalid input. Please type 'Switch' or 'Stay'.");
		}
	}
	//--------------------------------------------------------------------------------------------------------------------------------------------
	
	Valid_User_Input = false;

	//--------------------------------------------------------------------------------------------------------------------------------------------
	// Asking user which direction want to go
	while(Valid_User_Input == false)
	{
		Direction_User_Input = prompt("Which Direction you want to face (Forward or Backward)");

		if (Direction_User_Input.toLowerCase() == "forward")
		{
			Current_Direction_Facing = "Forward";
			Valid_User_Input = true;
		} 
		else if (Direction_User_Input.toLowerCase() == "backward")
		{
			Current_Direction_Facing = "Backward";
			Valid_User_Input = true;
		}
		else 
		{
			alert("Invalid input. Please type 'Forward' or 'Backward'.");
		}
	}
	//--------------------------------------------------------------------------------------------------------------------------------------------
	
	Valid_User_Input = false;
	
	//--------------------------------------------------------------------------------------------------------------------------------------------
	// Update Current Location
	var transition = stationTransitions[Current_Location][Current_Line][Current_Direction_Facing];
	Station = interchangeStations[transition.station];
	Current_Location = Station.name;
	Current_Line_Index = transition.line;
	//--------------------------------------------------------------------------------------------------------------------------------------------
	
	
	//--------------------------------------------------------------------------------------------------------------------------------------------
	// Checking if Destination is Reached
	if(Current_Location == Destination_Station)
   {
	   Game_Running = false;
   }
	//--------------------------------------------------------------------------------------------------------------------------------------------
}

console.log("Yay you reached your destination")

var transition = stationTransitions[Current_Location][Current_Line][Current_Direction_Facing];
console.log(transition.Feedback);
console.log(transition.station);
console.log(transition.line);

Station = interchangeStations[transition.station];
Current_Location = Station.name;
Current_Line_Index = transition.line;

console.log("-------------Updated--------------")
console.log(Current_Location)
console.log(Current_Direction_Facing)
console.log(Current_Line)


console.log("You are currently at " + Current_Location + " on the " + Current_Line + " line, facing " + Direction_Facing + ".");

if(Current_Location == "Jurong East" && Current_Line == "NS" && Direction_Facing == "Forward")
{
	console.log("Next Station Would be Woodlands");
}
else if(Current_Location == "Jurong East" && Current_Line == "NS" && Direction_Facing == "Backward")
{
	console.log("You still at Jurong East");
}

if(Current_Location == "Jurong East" && Current_Line == "EW" && Direction_Facing == "Forward")
{
	console.log("Next Station Would be Buona Vista");
}
else if(Current_Location == "Jurong East" && Current_Line == "NS" && Direction_Facing == "Backward")
{
	console.log("Next Station Would be Tuas Link");
}
*/

//console.log("( Updated )You are currently at " + Current_Location + " on the " + Current_Line + " line, facing " + Direction_Facing + ".");