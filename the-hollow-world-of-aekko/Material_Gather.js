/*
==================Material Gathering v3=========================

The purpose of this macro is to make it stupid easy for any
player to roll for materials

Through dialog boxes it will ask the user what kind of material
they want to collect, what biome they are in, if they are in
promaticous (red materials only), and if they are in the hollow

The macro will return rolling the specified table and displaying
it as a chat message

================================================================
*/

//Declare arrays of tables for each type (normal, holllow, promatican)
const red_norm = [
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.AdBs5ALl4X63mu2D"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.mpuFVpgDh5DMwxpA"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.UhuqG8fmMEDnTReu"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.P7ZwJQtfPdelTjph"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.gJl9Jn8ZE8ayHVs5"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.LVyu3XazAlFeyUDK"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.A22QvKSgwDFAhTAs"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.A11f2qaCNWKbQU8l"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.XHemftppjQ28zg2A"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.Cb67R1fU83322UY6")
]

const red_norm_p = [
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.7LoL0R4Oi84DePzF"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.tn3lh0aEwIgtl65m"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.LPwq0wNSVLlm2Nl8"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.jvnm2aaqBOxiMq7q"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.Aptowa7e8oxQBVSK"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.XABuzHYjQfsxikEm"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.YJAdq8jGVpGn2lt6"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.QAOqAiCLwHEEJs01"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.zPB39qGT60a6MJbf"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.VUR8CqzGeykvgVuS")
]

const red_hollow = [
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.C3J81mlEpAG1b6tk"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.Hfrl7GyKr7O9W5PZ"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.1ZvW6fjt72cYF7g2"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.WjVkcAlUyduft0qI"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.h4QHuNz3WwcgfkIZ"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.GLjleF06IWb4zJTL"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.GoujRT4HlyOfYVjg"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.LBZjtNyCekU6hMQs"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.0l4KstjsomQQPl5D")
]
const red_hollow_p = [
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.m0adghnyS5WKJ6Dg"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.gu6I9E013TuvkSDs"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.hNHqVChPcr4dGIz9"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.FSLMv9FeaDJUcezO"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.kcEdPGdJFzr5BhfP"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.jALVBpdfxaxvfpp1"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.FQBCC2hbLPiPP114"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.n5jCwZerrbGfTZpu"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.gsGQ23MbcwDzlYCL")
]
const blue_norm = [
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.SwASrPkwPWPhFfsd"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.TjJqMEUSWdQa5Sdr"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.eCyLGysYcvuauulr"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.SwYVpe6B6GVq89eY"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.k18axgGxy2VDWcf4"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.ghN18AqqwZy51axh"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.noRCYMet1JfC9rpM"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.0l6g6TLbjU1wQU7J"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.gLo4ddObEPqvPpcc"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.Eo9dBmLK4hMMMhBR")
]
const blue_hollow = [
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.e5NC915RwVHlPDEv"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.0q1mqiCp7kJLezIU"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.gkeLEvmSnrM3em80"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.D2gMLppwUcuXFKjW"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.QIxtj1G1OcA8DElz"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.PPN2rhRZiSHtcm8h"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.KLEhkCQOk8mC6sMg"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.cMqVv3ygWsJJ4sHB"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.auJsKn22MrySU3uL")
]
const green_norm = [
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.yxkcLuxtxk6gCma8"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.bvyqS40cbYbfs9GE"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.JpUUtOR6NSzaRUbY"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.TxqMvEOlE1PkDWdA"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.anEjRiGJ9q8Vd6xo"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.nUR6OXaXEdsSWtBT"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.j8Nph4agvjq1neCz"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.MB2mj1DGM4jtteHO"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.Vo2Vk2MXz7bNdeec"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.AX8soI7OiLB8rHyU")
]
const green_hollow = [
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.9xXEIFAc0ek06n26"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.jGN3wYAjMrLzLGnL"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.Dy0tqtvcn7q6H8u1"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.eDuwKGWHHlfdARwW"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.Ahz2JQs5S7Qg1xbf"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.JGV4Gh3zY1XDDyJ6"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.kNgHwOawucEXaNOx"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.LmikqhXBsx6WfE88"),
    await fromUuid("Compendium.the-hollow-world-of-aekko.random-tables.RollTable.RIGibKwmVpOESA7Y")
]

//declare callback functions
function gatherRedCallback(){
    let region_type_sel = new Dialog({
            title:"Region Type",
            content:"<p>What kind of region are you in?</p>",
            buttons:{
                one:{
                    label: "Normal",
                    callback: () => normal_red()
                },
                two:{
                    label: "Promaticous",
                    callback: () => promatican_red()
                },
                three:{
                    label: "Hollow",
                    callback: () => hollow_red()                   
                },
                four:{
                    label: "Promatican Hollow",
                    callback: () => promatican_hollow_red()
                }
            }
        }
    );
    region_type_sel.render(true);
}

function normal_red(){
    let normal_red_d = new Dialog({
            title:"Biome Select",
            content:"<p>Select your current biome</p>",
            buttons:{
                one:{
                    label:"Desert",
                    callback: () => red_norm[0].draw()
                },
                two:{
                    label:"Highland",
                    callback: () => red_norm[1].draw()
                },
                three:{
                    label:"Mountain",
                    callback: () => red_norm[2].draw()
                },
                four:{
                    label:"Oceanic",
                    callback: () => red_norm[3].draw()
                },
                five:{
                    label:"Plains",
                    callback: () => red_norm[4].draw()
                },
                six:{
                    label:"Riverlands",
                    callback: () => red_norm[5].draw()
                },
                seven:{
                    label:"Tundra",
                    callback: () => red_norm[6].draw()
                },
                eight:{
                    label:"Underground",
                    callback: () => red_norm[7].draw()
                },
                nine:{
                    label:"Wetland",
                    callback: () => red_norm[8].draw()
                },
                ten:{
                    label:"Woodlands",
                    callback: () => red_norm[9].draw()
                }
            }
        }
    )
    normal_red_d.render(true);
}

function promatican_red(){
    let promatican_red_d = new Dialog({
            title:"Biome Select",
            content:"<p>Select your current biome</p>",
            buttons:{
                one:{
                    label:"Desert",
                    callback: () => red_norm_p[0].draw()
                },
                two:{
                    label:"Highland",
                    callback: () => red_norm_p[1].draw()
                },
                three:{
                    label:"Mountain",
                    callback: () => red_norm_p[2].draw()
                },
                four:{
                    label:"Oceanic",
                    callback: () => red_norm_p[3].draw()
                },
                five:{
                    label:"Plains",
                    callback: () => red_norm_p[4].draw()
                },
                six:{
                    label:"Riverlands",
                    callback: () => red_norm_p[5].draw()
                },
                seven:{
                    label:"Tundra",
                    callback: () => red_norm_p[6].draw()
                },
                eight:{
                    label:"Underground",
                    callback: () => red_norm_p[7].draw()
                },
                nine:{
                    label:"Wetland",
                    callback: () => red_norm_p[8].draw()
                },
                ten:{
                    label:"Woodlands",
                    callback: () => red_norm_p[9].draw()
                }
            }
        }
    )
    promatican_red_d.render(true);
}

function hollow_red(){
    let promatican_red_d = new Dialog({
            title:"Biome Select",
            content:"<p>Select your current biome</p>",
            buttons:{
                one:{
                    label:"Darksea",
                    callback: () => red_hollow[0].draw()
                },
                two:{
                    label:"Desert",
                    callback: () => red_hollow[1].draw()
                },
                three:{
                    label:"Highland",
                    callback: () => red_hollow[2].draw()
                },
                four:{
                    label:"Mountain",
                    callback: () => red_hollow[3].draw()
                },
                five:{
                    label:"Plains",
                    callback: () => red_hollow[4].draw()
                },
                six:{
                    label:"Riverlands",
                    callback: () => red_hollow[5].draw()
                },
                seven:{
                    label:"Tundra",
                    callback: () => red_hollow[6].draw()
                },
                eight:{
                    label:"Wetland",
                    callback: () => red_hollow[7].draw()
                },
                nine:{
                    label:"Woodlands",
                    callback: () => red_hollow[8].draw()
                }
            }
        }
    )
    promatican_red_d.render(true)
}

function promatican_hollow_red(){
    let promatican_red_d = new Dialog({
            title:"Biome Select",
            content:"<p>Select your current biome</p>",
            buttons:{
                one:{
                    label:"Darksea",
                    callback: () => red_hollow_p[0].draw()
                },
                two:{
                    label:"Desert",
                    callback: () => red_hollow_p[1].draw()
                },
                three:{
                    label:"Highland",
                    callback: () => red_hollow_p[2].draw()
                },
                four:{
                    label:"Mountain",
                    callback: () => red_hollow_p[3].draw()
                },
                five:{
                    label:"Plains",
                    callback: () => red_hollow_p[4].draw()
                },
                six:{
                    label:"Riverlands",
                    callback: () => red_hollow_p[5].draw()
                },
                seven:{
                    label:"Tundra",
                    callback: () => red_hollow_p[6].draw()
                },
                eight:{
                    label:"Wetland",
                    callback: () => red_hollow_p[7].draw()
                },
                nine:{
                    label:"Woodlands",
                    callback: () => red_hollow_p[8].draw()
                }
            }
        }
    )
    promatican_red_d.render(true)
}

function gatherGreenCallback(){
    let region_type_sel = new Dialog({
            title:"Region Type",
            content:"<p>What kind of region are you in?</p>",
            buttons:{
                one:{
                    label: "Normal",
                    callback: () => normal_green()
                },
                two:{
                    label: "Hollow",
                    callback: () => hollow_green()
                }
            }
        }
    );
    region_type_sel.render(true);
}

function normal_green(){
    let normal_green_d = new Dialog({
            title:"Biome Select",
            content:"<p>Select your current biome</p>",
            buttons:{
                one:{
                    label:"Desert",
                    callback: () => green_norm[0].draw()
                },
                two:{
                    label:"Highland",
                    callback: () => green_norm[1].draw()
                },
                three:{
                    label:"Mountain",
                    callback: () => green_norm[2].draw()
                },
                four:{
                    label:"Oceanic",
                    callback: () => green_norm[3].draw()
                },
                five:{
                    label:"Plains",
                    callback: () => green_norm[4].draw()
                },
                six:{
                    label:"Riverlands",
                    callback: () => green_norm[5].draw()
                },
                seven:{
                    label:"Tundra",
                    callback: () => green_norm[6].draw()
                },
                eight:{
                    label:"Underground",
                    callback: () => green_norm[7].draw()
                },
                nine:{
                    label:"Wetland",
                    callback: () => green_norm[8].draw()
                },
                ten:{
                    label:"Woodlands",
                    callback: () => green_norm[9].draw()
                }
            }
        }
    )
    normal_green_d.render(true);
}

function hollow_green(){
    let hollow_green_d = new Dialog({
            title:"Biome Select",
            content:"<p>Select your current biome</p>",
            buttons:{
                one:{
                    label:"Darksea",
                    callback: () => green_hollow[0].draw()
                },
                two:{
                    label:"Desert",
                    callback: () => green_hollow[1].draw()
                },
                three:{
                    label:"Highland",
                    callback: () => green_hollow[2].draw()
                },
                four:{
                    label:"Mountain",
                    callback: () => green_hollow[3].draw()
                },
                five:{
                    label:"Plains",
                    callback: () => green_hollow[4].draw()
                },
                six:{
                    label:"Riverlands",
                    callback: () => green_hollow[5].draw()
                },
                seven:{
                    label:"Tundra",
                    callback: () => green_hollow[6].draw()
                },
                eight:{
                    label:"Wetland",
                    callback: () => green_hollow[7].draw()
                },
                nine:{
                    label:"Woodlands",
                    callback: () => green_hollow[8].draw()
                }
            }
        }
    )
    hollow_green_d.render(true)
}

function gatherBlueCallback(){
        let region_type_sel = new Dialog({
            title:"Region Type",
            content:"<p>What kind of region are you in?</p>",
            buttons:{
                one:{
                    label: "Normal",
                    callback: () => normal_blue()
                },
                two:{
                    label: "Hollow",
                    callback: () => hollow_blue()
                }
            }
        }
    );
    region_type_sel.render(true);
}

function normal_blue(){
    let normal_blue_d = new Dialog({
            title:"Biome Select",
            content:"<p>Select your current biome</p>",
            buttons:{
                one:{
                    label:"Desert",
                    callback: () => blue_norm[0].draw()
                },
                two:{
                    label:"Highland",
                    callback: () => blue_norm[1].draw()
                },
                three:{
                    label:"Mountain",
                    callback: () => blue_norm[2].draw()
                },
                four:{
                    label:"Oceanic",
                    callback: () => blue_norm[3].draw()
                },
                five:{
                    label:"Plains",
                    callback: () => blue_norm[4].draw()
                },
                six:{
                    label:"Riverlands",
                    callback: () => blue_norm[5].draw()
                },
                seven:{
                    label:"Tundra",
                    callback: () => blue_norm[6].draw()
                },
                eight:{
                    label:"Underground",
                    callback: () => blue_norm[7].draw()
                },
                nine:{
                    label:"Wetland",
                    callback: () => blue_norm[8].draw()
                },
                ten:{
                    label:"Woodlands",
                    callback: () => blue_norm[9].draw()
                }
            }
        }
    )
    normal_blue_d.render(true);
}

function hollow_blue(){
    let hollow_blue_d = new Dialog({
            title:"Biome Select",
            content:"<p>Select your current biome</p>",
            buttons:{
                one:{
                    label:"Darksea",
                    callback: () => blue_hollow[0].draw()
                },
                two:{
                    label:"Desert",
                    callback: () => blue_hollow[1].draw()
                },
                three:{
                    label:"Highland",
                    callback: () => blue_hollow[2].draw()
                },
                four:{
                    label:"Mountain",
                    callback: () => blue_hollow[3].draw()
                },
                five:{
                    label:"Plains",
                    callback: () => blue_hollow[4].draw()
                },
                six:{
                    label:"Riverlands",
                    callback: () => blue_hollow[5].draw()
                },
                seven:{
                    label:"Tundra",
                    callback: () => blue_hollow[6].draw()
                },
                eight:{
                    label:"Wetland",
                    callback: () => blue_hollow[7].draw()
                },
                nine:{
                    label:"Woodlands",
                    callback: () => blue_hollow[8].draw()
                }
            }
        }
    )
    hollow_blue_d.render(true)
}

//intital dialog window
const label_red = `
    <style>
        .red-class{color: red}
    </style>

    <div class="red-class">
        Red Material
    </div>
`;

const label_blue= `
    <style>
        .blue-class{color: blue}
    </style>

    <div class="blue-class">
        Blue Material
    </div>
`;

const label_green = `
    <style>
        .green-class{color: green}
    </style>

    <div class="green-class">
        Green Material
    </div>
`;

let intitial_d = new Dialog(
    {
    title:"Material Gathering",
    content:"<p>Choose either red, green, or blue materials</p>",
    buttons:{
        one:{
            icon:'<i class="fa-solid fa-mountain"></i>',
            label:label_red,
            callback: () => gatherRedCallback()//gatherRedCallback()
        },
        two:{
            icon:'<i class="fa-solid fa-tree"></i>',
            label:label_green,
            callback: () => gatherGreenCallback()
        },
        three:{
            icon:'<i class="fa-solid fa-dragon"></i>',
            label:label_blue,
            callback: () => gatherBlueCallback()
        }
    }
    //i want the box to do nothing if they close out
    },

);
 
intitial_d.render(true);