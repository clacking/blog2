import { useAmp } from 'next/amp';

export default function Youtube ({id}: {id: string}) {
    const isAmp = useAmp();

    return isAmp ? (
        <>
            <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"></script>
            <amp-youtube data-videoid={id} layout="responsive" />
        </>
    ) : (
        <iframe width="560" height="315" src={`https://www.youtube-nocookie.com/embed/${id}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
    )
}
