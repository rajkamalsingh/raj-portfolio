export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  problem: string;
  approach: string[];
  results: string[];
  reflection: string;
  tech: string[];
  repo: string;
  repoLabel?: string;
  images?: ProjectImage[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "lstm-stock-price-prediction",
    title: "Stock Price Prediction Using LSTM",
    subtitle: "Bidirectional LSTM + attention, retrained daily on fresh data",
    summary:
      "A self-updating forecasting pipeline: a daily cron job pulls fresh OHLC prices and news headlines, scores sentiment, and retrains a Bidirectional LSTM with attention on the combined feature set — served through both a FastAPI endpoint and a Streamlit dashboard.",
    problem:
      "Stock price movement is notoriously hard to predict from raw historical prices alone — a lot of naive forecasting models effectively just lag the actual price by one time step and call it a prediction. The goal was to build something that goes beyond that: pulling in technical indicators and daily news sentiment as auxiliary signals, then packaging the whole thing as a pipeline that keeps itself current rather than going stale the day after training.",
    approach: [
      "Ran a daily cron job (weekdays) that pulled fresh OHLC data via yfinance and computed a full technical-indicator set — SMA, MACD, RSI, Bollinger Bands, Stochastic Oscillator, ATR, and OBV.",
      "In parallel, pulled the day's news headlines via NewsAPI and scored each one with VADER sentiment analysis.",
      "Merged the two streams by trading day, rolling weekend and holiday sentiment forward onto the next trading day so no signal was silently dropped.",
      "Retrained a Bidirectional LSTM with an attention mechanism on 16 features across 120-day sequences, using Huber loss for robustness to price outliers.",
      "Served predictions two ways: a FastAPI /predict endpoint (containerized with Docker, deployed on AWS EC2) for programmatic access, and a Streamlit dashboard for interactive use.",
    ],
    results: [
      "15% improvement in prediction accuracy over baseline models.",
      "MAE of 1.73 and RMSE of 2.91 on held-out test data.",
      "Fully automated daily refresh — new data, new sentiment, and a retrained model with zero manual steps.",
    ],
    reflection:
      "The architecture ended up mattering as much as the data — moving from a plain LSTM to a bidirectional model with attention, and handling the weekend/holiday sentiment gap explicitly, both came from hitting real edge cases while building this rather than being obvious upfront. If I revisited this, I'd backtest the model against an actual trading strategy rather than point-accuracy metrics alone, since a lower MAE doesn't always translate into profitable decisions.",
    tech: ["Python", "TensorFlow", "FastAPI", "Streamlit", "Docker", "AWS EC2"],
    repo: "https://github.com/rajkamalsingh/fintech_project",
    images: [
      {
        src: "/lstm-architecture.svg",
        alt: "Architecture diagram showing two parallel daily pipelines — fetching OHLC data and computing technical indicators, and fetching news and scoring sentiment with VADER — merging by trading day, feeding a Bidirectional LSTM with attention, served through both a FastAPI endpoint and a Streamlit dashboard, all triggered by a daily cron job",
        caption: "Pipeline: parallel stock + news ingestion → trading-day merge → BiLSTM with attention → served via FastAPI and Streamlit, retrained every weekday.",
      },
    ],
  },
  {
    id: 2,
    slug: "face-detection-emotion-classification",
    title: "Real-Time Face Detection & Emotion Classification",
    subtitle: "Computer vision & CNN-based inference",
    summary:
      "A real-time computer vision system for face detection and emotion classification using CNNs and OpenCV, optimized for low-latency live inference on streaming video.",
    problem:
      "Real-time video applications need to detect faces and read emotional cues fast enough to feel instantaneous — anything that lags noticeably breaks the experience. The challenge was building a CNN-based classification pipeline that could keep up with live video, not just perform well on static test images.",
    approach: [
      "Used OpenCV for face detection on incoming video frames, isolating face regions before classification.",
      "Trained a CNN-based emotion classifier with Keras on labeled facial expression data.",
      "Optimized the inference pipeline specifically for low-latency, frame-by-frame processing rather than batch prediction, since the target use case was live video.",
      "Containerized the pipeline with Docker for consistent deployment across environments.",
    ],
    results: [
      "Real-time inference on live video streams.",
      "Pipeline optimized specifically for low-latency frame-by-frame processing rather than offline batch analysis.",
    ],
    reflection:
      "This project was as much about systems engineering as machine learning — getting a model that performs well in a notebook to actually run fast enough for live video required real profiling and optimization work, not just training a better model.",
    tech: ["Python", "Keras", "OpenCV", "Docker"],
    repo: "https://github.com/rajkamalsingh/human-face-detection-and-emotion-and-gender-classification",
    images: [
      {
        src: "/face-detection-architecture.svg",
        alt: "Architecture diagram showing a live video stream flowing into OpenCV face detection, then a CNN emotion classifier, then real-time output, with the detection and classification steps running inside a Docker container",
        caption: "Pipeline: live video → OpenCV face detection → CNN emotion classifier → real-time output, all containerized with Docker.",
      },
    ],
  },
  {
    id: 3,
    slug: "bitcoin-anomaly-detection",
    title: "Real-Time Bitcoin Anomaly Detection",
    subtitle: "Kinesis + Lambda pipeline with SNS alerting",
    summary:
      "A real-time streaming pipeline on AWS — Kinesis ingests raw data, a Lambda function scores each record with an Isolation Forest model and fires SNS alerts on anomalies, while parallel Firehose deliveries feed S3, Athena, and a QuickSight dashboard for live and historical analysis.",
    problem:
      "Cryptocurrency markets move fast and generate huge volumes of tick data — flagging anomalous price or volume behavior only matters if it happens in near real time. The goal was a pipeline that could ingest and process thousands of records a day with sub-second detection latency, without relying on brittle manual thresholds.",
    approach: [
      "Ingested raw data through a Kinesis data stream, with a Python processing layer computing derived features and pushing them onto a second, processed Kinesis stream.",
      "Ran a Lambda function on the processed stream that scores each record with a trained Isolation Forest model, firing an SNS alert immediately whenever an anomaly is flagged.",
      "Delivered both raw and processed data to S3 via separate Firehose streams, keeping a full historical record independent of the real-time alerting path.",
      "Queried the S3 data with Athena and built a QuickSight dashboard for real-time and historical visualization.",
    ],
    results: [
      "Processed 10K+ records/day with sub-second anomaly detection latency.",
      "~30% precision improvement over statistical threshold baselines.",
      "60% reduction in manual monitoring effort.",
    ],
    reflection:
      "Moving from a statistical threshold baseline to a learned Isolation Forest model was the single biggest improvement — thresholds are brittle and need constant re-tuning as market volatility shifts, while the model adapts to the shape of 'normal' data automatically.",
    tech: ["AWS Kinesis", "Lambda", "Isolation Forest", "Firehose", "Athena", "QuickSight"],
    repo: "https://github.com/rajkamalsingh/live-anomaly-detection-btc",
    images: [
      {
        src: "/bitcoin-architecture.jpeg",
        alt: "Architecture diagram of the Bitcoin anomaly detection pipeline: Kinesis raw data stream into Python processing, a processed Kinesis stream, a Lambda function running the ML model that sends SNS alerts on anomalies, and parallel Firehose deliveries into S3, Athena, and a QuickSight dashboard",
        caption:
          "Pipeline architecture: Kinesis ingestion → Lambda anomaly scoring → SNS alerts, with parallel Firehose delivery into S3, Athena, and QuickSight.",
      },
    ],
  },
  {
    id: 4,
    slug: "rag-based-qa-system",
    title: "RAG-Based QA System",
    subtitle: "Fine-tuned FLAN-T5 at 4,000× data scale",
    summary:
      "Scaled a generative question-answering pipeline from a 20-example custom FAQ dataset to 87K+ SQuAD-style examples, fine-tuning FLAN-T5 with Hugging Face Transformers using mixed-precision training, and deploying an interactive Gradio inference app.",
    problem:
      "Small, custom FAQ datasets aren't enough to fine-tune a generative model that generalizes well. The goal was to see how far a QA system could be pushed by scaling training data aggressively, then package the result as something people could actually query.",
    approach: [
      "Started from a 20-example custom FAQ dataset and scaled it to 87K+ examples using SQuAD v1.1 — a 4,000× increase in training data.",
      "Fine-tuned FLAN-T5 (80M to 250M parameter variants) using Hugging Face Transformers, with custom prompt formatting and batched tokenization.",
      "Used mixed-precision (FP16) training and validation monitoring via Seq2SeqTrainer to keep experimentation fast and reproducible.",
      "Built and deployed an interactive Gradio inference UI, and architected the system with future LoRA-based parameter-efficient fine-tuning in mind.",
    ],
    results: [
      "Scaled training data 4,000× — from 20 examples to 87K+.",
      "Fine-tuned and compared FLAN-T5 variants from 80M to 250M parameters.",
      "Shipped a working, interactive Gradio QA interface.",
    ],
    reflection:
      "The scale jump from 20 to 87K examples was the real experiment here — it's easy to assume more data always helps, but tracking validation performance across that scale-up taught me where the returns started diminishing for a model this size.",
    tech: ["Python", "Hugging Face", "FLAN-T5", "Gradio"],
    repo: "https://github.com/rajkamalsingh/llm-rag-basics",
  },
  {
    id: 5,
    slug: "food-context-classification",
    title: "Food Context Classification via Transfer Learning",
    subtitle: "ResNet-50 · home vs. restaurant vs. packaged food",
    summary:
      "Studied how a pretrained ResNet-50 classifies food images by scene context — home, restaurant, or packaged — rather than by the food itself, then compared four training strategies (baseline, augmentation, synthetic noise, and combined) to see which actually helped.",
    problem:
      "Most food-image classifiers try to identify what the food is. This project asked a different question: can a model reliably classify the context a food photo was taken in — at home, in a restaurant, or as packaged goods — using scene cues rather than the dish itself?",
    approach: [
      "Fine-tuned a pretrained ResNet-50 on a food-context dataset labeled by scene (home, restaurant, packaged) rather than by dish.",
      "Ran four separate training strategies — baseline transfer learning, standard data augmentation, injected synthetic noise, and a combined approach — to isolate which techniques actually helped.",
      "Evaluated all four strategies on a held-out test set using consistent metrics for a fair, controlled comparison.",
    ],
    results: [
      "94.5% test accuracy with the plain baseline transfer-learning model — the best of the four.",
      "Synthetic noise came closest at 93.1%; augmentation alone dropped to 91.7%; combining both hurt most, falling to 86.3%.",
      "Training curves show validation accuracy plateauing while training accuracy kept climbing — a sign of mild overfitting the augmentation strategies didn't fix.",
    ],
    reflection:
      "The most useful finding was a negative one: none of the augmentation strategies beat the plain baseline, and stacking them made things worse, not better. It's a good reminder that more complexity in a training pipeline isn't automatically better — augmentation choices need to be validated against your specific dataset, not assumed to help.",
    tech: ["PyTorch", "ResNet-50", "Transfer Learning"],
    repo: "https://github.com/rajkamalsingh/food_context_classification",
    images: [
      {
        src: "/food-context-accuracy.png",
        alt: "Bar chart comparing test accuracy across four training strategies: Baseline at 94.5%, Augmentation at 91.7%, Synthetic at 93.1%, and Combined at 86.3%",
        caption: "Test accuracy across all four training strategies — baseline wins, combined augmentation+noise loses the most ground.",
      },
      {
        src: "/food-context-training-curves.png",
        alt: "Line charts showing training and validation loss decreasing over 10 epochs, and training and validation accuracy, with validation accuracy plateauing below training accuracy",
        caption: "Loss and accuracy curves for the synthetic-noise variant — validation accuracy plateaus while training accuracy keeps climbing.",
      },
    ],
  },
  {
    id: 6,
    slug: "lane-detection",
    title: "Real-World Lane Detection",
    subtitle: "Classical computer vision under adverse conditions",
    summary:
      "Built a classical edge-based lane detection pipeline (Canny + Hough transform) and stress-tested it against shadows, motion blur, and bright light, then improved robustness with adaptive thresholds, histogram equalization, and slope filtering.",
    problem:
      "Classical lane-detection pipelines built on edge detection tend to work well in demo conditions and fall apart in the real world — shadows, motion blur, and harsh lighting all break fixed-threshold approaches. The goal was to deliberately stress-test a pipeline against those conditions rather than only evaluate it on clean footage.",
    approach: [
      "Built a classical computer vision pipeline using Canny edge detection and Hough transform to identify lane lines from road images.",
      "Deliberately stress-tested the pipeline against adverse conditions — shadows, motion blur, and bright/overexposed lighting — rather than only clean, ideal frames.",
      "Improved robustness with adaptive thresholding (replacing fixed thresholds), histogram equalization for lighting normalization, and slope filtering to reject spurious edge detections.",
    ],
    results: [
      "Adaptive-threshold pipeline reduced false lane detections compared to the fixed-threshold baseline.",
      "Maintained detection reliability across shadow, motion-blur, and bright-light test conditions.",
    ],
    reflection:
      "Classical CV techniques like Canny and Hough are fast and interpretable, but this project made clear how fragile fixed-threshold approaches are outside ideal lighting. Adaptive thresholding closed a lot of that gap without needing to reach for a deep-learning-based approach.",
    tech: ["Python", "OpenCV", "Canny/Hough"],
    repo: "https://github.com/rajkamalsingh/llm-rag-basics/tree/main/lane_detection_project",
    images: [
      {
        src: "/lane-detection-overlay.jpg",
        alt: "Mountain road with detected lane lines overlaid in bright green, extending from the bottom of the frame toward the vanishing point",
        caption: "Final output — detected lane lines overlaid on a mountain-road test frame.",
      },
      {
        src: "/lane-detection-canny.jpg",
        alt: "Canny edge detection map of the same road frame, showing white edge outlines of the road, lane lines, and terrain against a black background",
        caption: "Intermediate step — Canny edge map (thresholds 150/300) feeding the Hough line detection.",
      },
    ],
  },
  {
    id: 7,
    slug: "sp500-fundamentals-analytics",
    title: "S&P 500 Fundamentals Analytics",
    subtitle: "Cross-sector valuation & volatility study",
    summary:
      "A statistical analysis of S&P 500 company fundamentals — EPS, P/E, P/B, dividends, and volatility — exploring correlations between valuation metrics and how they vary across sectors.",
    problem:
      "Company fundamentals like EPS, P/E, and P/B are widely used for valuation, but their relationships to each other and to sector context aren't always intuitive. This project set out to quantify those relationships across the full S&P 500 rather than rely on rules of thumb.",
    approach: [
      "Collected and cleaned fundamentals data (EPS, P/E, P/B, dividends, volatility) across S&P 500 constituents.",
      "Ran correlation analysis between valuation metrics — including EPS vs. market cap and P/E vs. EPS — to surface which relationships actually hold across the index.",
      "Broke results down by sector to see how valuation relationships shift across industries, rather than treating the S&P 500 as one homogeneous group.",
      "Visualized findings with Matplotlib scatter and correlation plots for interpretability.",
    ],
    results: [
      "Market Cap and EBITDA are the strongest pair in the matrix at 0.90 correlation — largely mechanical, since EBITDA drives valuation.",
      "EPS correlates with Price at 0.47 but only 0.08 with P/E — a stock's earnings power says almost nothing about how expensive it is relative to peers.",
      "Financials had both the highest median EPS and the widest spread across companies; Real Estate the lowest and most compressed.",
      "Overall median EPS across the index sits at $5.24, with big dispersion by sector rather than a single 'typical' company.",
    ],
    reflection:
      "This project was a reminder that treating an index like the S&P 500 as one uniform group hides a lot of signal — the same valuation relationship can look completely different once you slice by sector.",
    tech: ["Python", "Pandas", "Matplotlib"],
    repo: "https://github.com/rajkamalsingh/Data_analytics",
    images: [
      {
        src: "/sp500-correlation.png",
        alt: "Correlation matrix heatmap of S&P 500 financial metrics including Price, P/E, EPS, Dividend Yield, Market Cap, EBITDA, P/S, and P/B",
        caption: "Correlation matrix across core valuation metrics — Market Cap and EBITDA correlate at 0.90.",
      },
      {
        src: "/sp500-eps-by-sector.png",
        alt: "Box plot showing EPS distribution by sector across the S&P 500, with Financials showing the highest median and widest spread",
        caption: "EPS distribution by sector — Financials leads on both median and spread; overall median is $5.24.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}