import React from "react";
import { VersionItem, TestStats } from "@site/src/components/conformance/types";
import { mapToTestStats } from "@site/src/components/conformance/utils";

import styles from "./styles.module.css";

interface BannerProps {
    focusItems: VersionItem[]
    setNewVersion: (newVersion: VersionItem) => void
}

export default function ConformanceBanner(props: BannerProps): JSX.Element {
    return (
        <div className={styles.bannerSection}>
            {props.focusItems.map((item)=>{
                return <BannerCard key={item.tagName} setNewVersion={props.setNewVersion} item={item} />
            })}
        </div>
    )
}

function BannerCard(props) {
    const [stats, setStats] = React.useState<TestStats | null>(null)

    React.useEffect(()=> {
        const fetchStats = async() => {
            const response = await fetch(props.item.fetchUrl);
            const results = await response.json();
            return results.r.a
        }

        fetchStats()
            .then(data=> setStats(mapToTestStats(data)))
    }, [])

    return (
        <div className={styles.cardContainer}>
            <div className="card">
                <div className="card__header">
                    {props.item.tagName === "main"
                    ?<h3>main Branch Results</h3>
                    :<h3>{"Release " + props.item.tagName + " Results"}</h3>
                    }
                </div>
                {stats
                ?<div className="card__body">
                    <div><span>{"Total: " + stats.total}</span></div>
                    <div><span style={{color:"var(--ifm-color-success)"}}>{"Passed: " + stats.passed}</span></div>
                    <div><span style={{color:"var(--ifm-color-warning)"}}>{"Ignored: " + stats.ignored}</span></div>
                    <div><span style={{color:"var(--ifm-color-danger)"}}>{"Failed: " + (stats.total - stats.passed - stats.ignored)}</span></div>
                    <div><span style={{color:"var(--ifm-color-danger)"}}>{"\u26A0Panics: " + stats.panic + "\u26A0"}</span></div>
                </div>
                : null}
                <div className="card__footer">
                    <button className="button button--block button--primary" onClick={()=>props.setNewVersion(props.item)}>View Results</button>
                </div>
            </div>
        </div>
    )
}