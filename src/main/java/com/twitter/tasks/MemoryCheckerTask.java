package com.twitter.tasks;

import com.twitter.model.Feed;
import com.twitter.processinglogic.TweetProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;

import java.util.Iterator;

/**
 * Created by ivsi on 9/5/2015.
 */
public class MemoryCheckerTask {

    private static final int NUM_MAX_ELEMENTS = 20;
    private static final int NUM_ELEMENTS_TO_KEEP = 5;

    private TweetProcessor tweetProcessor;

    @Autowired
    public MemoryCheckerTask(TweetProcessor tweetProcessor) {
        this.tweetProcessor = tweetProcessor;
    }

    @Scheduled(fixedRate = 15000)
    public void checkAndFreeMemory() {
        System.out.println("Running memory check");
        if (tweetProcessor.getFeeds().size() >= NUM_MAX_ELEMENTS) {
            System.out.println("Cleaning memory");
            int numRemovedElements = 0;
            for (Iterator<Feed> iterator = tweetProcessor.getFeeds().iterator(); (iterator.hasNext()) && (NUM_MAX_ELEMENTS - numRemovedElements > NUM_ELEMENTS_TO_KEEP); ) {
                iterator.remove();
                ++numRemovedElements;
            }
        } else {
            System.out.println("Memory OK");
        }
    }
}
